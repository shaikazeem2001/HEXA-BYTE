const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const supabase = require("./config/supabase");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const roomRoutes = require("./routes/room.routes");

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/rooms", roomRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("server is working");
});

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Socket Events
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log("User joined room:", room);
  });

  socket.on("send_message", async (data) => {
    try {
      // Find room by name or ID
      const { data: roomObj, error: roomError } = await supabase
        .from("rooms")
        .select("id, name")
        .or(`id.eq.${data.room},name.eq.${data.room}`)
        .maybeSingle();

      let targetRoomId = roomObj?.id;

      if (!roomObj) {
        // Create room if it doesn't exist
        const { data: newRoom, error: createRoomError } = await supabase
          .from("rooms")
          .insert([{ name: data.room, created_by: data.senderId }])
          .select()
          .single();
        
        if (createRoomError) throw createRoomError;
        targetRoomId = newRoom.id;
      }

      // Save message to Supabase
      const { data: newMessage, error: msgError } = await supabase
        .from("messages")
        .insert([{
          room: data.room, // Keep string version for sub-channels
          room_id: targetRoomId,
          sender_id: data.senderId,
          message_text: data.text
        }])
        .select(`
          *,
          sender:users(username)
        `)
        .single();

      if (msgError) throw msgError;

      // Emit to everyone in the room
      io.to(data.room).emit("receive_message", {
        id: newMessage.id,
        text: newMessage.message_text,
        sender: {
          id: newMessage.sender_id,
          username: newMessage.sender.username
        },
        room: data.room,
        createdAt: newMessage.created_at
      });
    } catch (err) {
      console.error("Error saving message:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Port
const PORT = process.env.PORT || 8000;

// Start Server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
