const Message = require("../models/Message");
const Room = require("../models/Room");
const mongoose = require("mongoose");

// Get messages for a specific room
exports.getMessagesByRoom = async (req, res) => {
  try {
    let { room } = req.params;
    
    // If it's not a valid ObjectId, assume it's a name and find the ID
    if (!mongoose.Types.ObjectId.isValid(room)) {
      const roomObj = await Room.findOne({ name: room });
      if (!roomObj) return res.json([]); // No messages if room doesn't exist
      room = roomObj._id;
    }

    const messages = await Message.find({ room })
      .populate("sender", "username avatar")
      .sort({ createdAt: 1 })
      .limit(100);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
