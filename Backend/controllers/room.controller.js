const supabase = require("../config/supabase");
const crypto = require("crypto");

exports.getRooms = async (req, res) => {
  try {
    const { data: rooms, error } = await supabase
      .from("rooms")
      .select("*, users(username)");
    
    if (error) throw error;
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rooms" });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const { name, description, isPrivate } = req.body;
    
    let inviteCode = null;
    if (isPrivate) {
      inviteCode = crypto.randomBytes(3).toString("hex");
    }

    const { data: room, error: roomError } = await supabase
      .from("rooms")
      .insert([{
        name,
        description,
        is_private: !!isPrivate,
        invite_code: inviteCode,
        created_by: req.user.id
      }])
      .select()
      .single();

    if (roomError) throw roomError;

    // Add creator to room_members
    const { error: memberError } = await supabase
      .from("room_members")
      .insert([{ room_id: room.id, user_id: req.user.id }]);

    if (memberError) throw memberError;

    res.status(201).json(room);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({ message: "Room name or invite code already exists" });
    }
    console.error("Create room error:", err);
    res.status(400).json({ message: "Failed to create room" });
  }
};

exports.getRoomByName = async (req, res) => {
  try {
    const { name } = req.params;
    const { data: room, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("name", name)
      .maybeSingle();

    if (error) throw error;
    if (!room) return res.status(404).json({ message: "Room not found" });
    
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.joinByInviteCode = async (req, res) => {
  try {
    const { inviteCode } = req.body;
    const { data: room, error: roomError } = await supabase
      .from("rooms")
      .select("*")
      .eq("invite_code", inviteCode)
      .maybeSingle();

    if (roomError) throw roomError;
    if (!room) return res.status(404).json({ message: "Invalid invite code" });

    // Check if already a member
    const { data: existing, error: checkError } = await supabase
      .from("room_members")
      .select("*")
      .eq("room_id", room.id)
      .eq("user_id", req.user.id)
      .maybeSingle();

    if (checkError) throw checkError;
    if (existing) return res.status(200).json({ message: "Already a member", room });

    const { error: joinError } = await supabase
      .from("room_members")
      .insert([{ room_id: room.id, user_id: req.user.id }]);

    if (joinError) throw joinError;

    res.json({ message: "Joined successfully", room });
  } catch (err) {
    console.error("Join room error:", err);
    res.status(500).json({ message: "Failed to join room" });
  }
};
