const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { StreamChat } = require("stream-chat");

// signup routes
router.post("/signup", async (req, res) => {
  if (!process.env.JWT_SECRET) {
    console.error("CRITICAL ERROR: JWT_SECRET is not defined in environment variables.");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([
        { username, email, password: hashedPassword }
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase Insert Error:", insertError);
      return res.status(500).json({ message: "Failed to create user", error: insertError.message });
    }

    return res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Signup Error Detailed:", error);
    return res.status(500).json({ 
      message: "Server error", 
      error: error.message
    });
  }
});

// middleware route 
const authMiddleware = require("../middleware/auth.middleware");

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('id, username, email, avatar')
      .eq('id', req.user.id)
      .single();

    if (error || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    let avatarConfig = null;
    let settings = null;
    try {
      if (user.avatar) {
          // Check if it's the new combined format or the old format
          const parsed = JSON.parse(user.avatar);
          if (parsed.avatarConfig || parsed.settings) {
              avatarConfig = parsed.avatarConfig || null;
              settings = parsed.settings || null;
          } else {
              // Legacy format
              avatarConfig = parsed;
          }
      }
    } catch (e) {
      console.warn("Could not parse json", e);
    }

    res.json({
      message: "Protected data accessed",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        avatarConfig,
        settings
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch another user's public info (e.g. for chat avatars)
router.get("/user/:id", authMiddleware, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('username, avatar')
      .eq('id', req.params.id)
      .single();

    if (error || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    let avatarConfig = null;
    try {
      if (user.avatar) {
          const parsed = JSON.parse(user.avatar);
          if (parsed.avatarConfig || parsed.settings) {
              avatarConfig = parsed.avatarConfig || null;
          } else {
              avatarConfig = parsed;
          }
      }
    } catch (e) { }

    res.json({
      username: user.username,
      avatarConfig
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { username, currentPassword, newPassword, avatarConfig, settings } = req.body;
    let updateData = {};

    if (username) updateData.username = username;

    // Fetch user first to get existing avatar/settings data
    const { data: existingUser } = await supabase
      .from('users')
      .select('avatar, password')
      .eq('id', req.user.id)
      .single();

    // Handle avatar & settings combining into existing column
    if (avatarConfig || settings) {
        let currentCombined = {};
        try {
            if (existingUser?.avatar) {
               const parsed = JSON.parse(existingUser.avatar);
               if (parsed.avatarConfig || parsed.settings) {
                   currentCombined = parsed;
               } else {
                   currentCombined = { avatarConfig: parsed };
               }
            }
        } catch(e) {}

        if (avatarConfig) currentCombined.avatarConfig = avatarConfig;
        if (settings) currentCombined.settings = settings;

        updateData.avatar = JSON.stringify(currentCombined);
    }

    // Fetch user if password change requested
    if (currentPassword && newPassword) {
       if (existingUser) {
         const isMatch = await bcrypt.compare(currentPassword, existingUser.password);
         if (!isMatch) return res.status(400).json({ message: "Invalid current password" });
         updateData.password = await bcrypt.hash(newPassword, 10);
       }
    }

    if (Object.keys(updateData).length > 0) {
        const { error } = await supabase
          .from('users')
          .update(updateData)
          .eq('id', req.user.id);
        
        if (error) throw error;
    }
    
    res.json({ message: "Profile updated successfully" });

  } catch (err) {
    console.error("Profile Update Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete Profile Route (Account Deletion)
router.delete("/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // First delete from Supabase Auth & Users table 
    const { error: dbError } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);

    if (dbError) throw dbError;

    // Delete user from Stream to prevent ghost data
    try {
      if (process.env.STREAM_API_KEY && process.env.STREAM_API_SECRET) {
        const serverClient = StreamChat.getInstance(
          process.env.STREAM_API_KEY,
          process.env.STREAM_API_SECRET
        );
        await serverClient.deleteUser(userId, { mark_messages_deleted: true });
      }
    } catch (streamError) {
      console.error("Failed to delete user from Stream:", streamError);
      // We don't throw here to ensure local deletion succeeds even if Stream errors
    }

    // Erase the cookie from the client
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });

    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    console.error("Account Deletion Error:", err);
    res.status(500).json({ message: "Server error deleting account", error: err.message });
  }
});

// login routes
router.post("/login", async (req, res) => {
  if (!process.env.JWT_SECRET) {
    console.error("CRITICAL ERROR: JWT_SECRET is not defined in environment variables.");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const { email, password } = req.body;

    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError || !user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create Token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set token as an HttpOnly, Secure cookie
    res.cookie('token', token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === 'production',
       sameSite: 'none', // Required for cross-origin requests
       maxAge: 24 * 60 * 60 * 1000 // 1 day limit
    });

      let avatarConfig = null;
      let settingsConfig = null;
      try {
        if (user.avatar) {
          const parsed = JSON.parse(user.avatar);
          if (parsed.avatarConfig || parsed.settings) {
              avatarConfig = parsed.avatarConfig || null;
              settingsConfig = parsed.settings || null;
          } else {
              avatarConfig = parsed;
          }
        }
      } catch (e) { }

      return res.json({
        message: "Login successful",
        // Token still attached temporarily for backward compatibility while UI updates
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          avatarConfig,
          settings: settingsConfig
        }
      });
  } catch (error) {
    console.error("Login Error Detailed:", error);
    return res.status(500).json({ 
      message: "Server error", 
      error: error.message
    });
  }
});

// Logout explicitly clear HTTP-only cookies
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
  });
  res.json({ message: "Logged out successfully" });
});

// Stream Token generator for authenticated users
router.get("/stream-token", authMiddleware, async (req, res) => {
  try {
    if (!process.env.STREAM_API_KEY || !process.env.STREAM_API_SECRET) {
      console.error("Stream API credentials missing from backend .env");
      return res.status(500).json({ message: "Stream API credentials not configured" });
    }
    
    const serverClient = StreamChat.getInstance(
      process.env.STREAM_API_KEY, 
      process.env.STREAM_API_SECRET
    );

    // Upsert the user into Stream explicitly to prevent 403 Forbidden errors
    await serverClient.upsertUser({
      id: req.user.id,
      role: 'user',
    });

    // Create a token that never expires
    const token = serverClient.createToken(req.user.id);
    
    res.json({ token, userId: req.user.id });
  } catch (err) {
    console.error("Generate Stream Token Error:", err);
    res.status(500).json({ message: "Failed to generate stream token" });
  }
});

// Stream Token generator for guests
router.post("/guest-stream-token", async (req, res) => {
  try {
    const { guestId } = req.body;
    
    if (!guestId || !guestId.startsWith("guest_")) {
      return res.status(400).json({ message: "Invalid guest ID format." });
    }

    if (!process.env.STREAM_API_KEY || !process.env.STREAM_API_SECRET) {
      console.error("Stream API credentials missing from backend .env");
      return res.status(500).json({ message: "Stream API credentials not configured" });
    }
    
    const serverClient = StreamChat.getInstance(
      process.env.STREAM_API_KEY, 
      process.env.STREAM_API_SECRET
    );

    // Upsert the guest user into Stream explicitly
    await serverClient.upsertUser({
      id: guestId,
      name: 'Guest User',
      role: 'user', // Depending on your stream settings, you can assign 'guest' if enabled
    });

    const token = serverClient.createToken(guestId);
    
    res.json({ token, userId: guestId });
  } catch (err) {
    console.error("Generate Guest Stream Token Error:", err);
    res.status(500).json({ message: "Failed to generate guest stream token" });
  }
});

module.exports = router;
