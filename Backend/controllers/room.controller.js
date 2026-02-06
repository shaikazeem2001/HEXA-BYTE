const Room = require("../models/Room");
const crypto = require("crypto");

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("createdBy", "username");
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

    const room = new Room({
      name,
      description,
      isPrivate: !!isPrivate,
      inviteCode,
      createdBy: req.user.id,
      members: [req.user.id]
    });
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Room name or invite code already exists" });
    }
    console.error("Create room error:", err);
    res.status(400).json({ message: "Failed to create room" });
  }
};

exports.getRoomByName = async (req, res) => {
  try {
    const { name } = req.params;
    const room = await Room.findOne({ name });

    if (!room) return res.status(404).json({ message: "Room not found" });
    
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.joinByInviteCode = async (req, res) => {
  try {
    const { inviteCode } = req.body;
    const room = await Room.findOne({ inviteCode });

    if (!room) return res.status(404).json({ message: "Invalid invite code" });

    if (room.members.includes(req.user.id)) {
      return res.status(200).json({ message: "Already a member", room });
    }

    room.members.push(req.user.id);
    await room.save();

    res.json({ message: "Joined successfully", room });
  } catch (err) {
    console.error("Join room error:", err);
    res.status(500).json({ message: "Failed to join room" });
  }
};
