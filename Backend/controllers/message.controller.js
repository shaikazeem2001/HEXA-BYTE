const supabase = require("../config/supabase");

// Get messages for a specific room
exports.getMessagesByRoom = async (req, res) => {
  try {
    const { room } = req.params;

    const { data: messages, error } = await supabase
      .from("messages")
      .select(`
        *,
        sender:users(username)
      `)
      .eq("room", room)
      .order("created_at", { ascending: true });

    if (error) throw error;

    // Format for frontend compatibility
    const formatted = messages.map(m => ({
      _id: m.id,
      text: m.message_text,
      sender: {
        id: m.sender_id,
        username: m.sender.username
      },
      room: m.room,
      createdAt: m.created_at
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Get messages error:", err);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
