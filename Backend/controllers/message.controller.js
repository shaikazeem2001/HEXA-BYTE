const supabase = require("../config/supabase");

exports.getMessagesByRoom = async (req, res) => {
  try {
    let { room } = req.params;
    
    // Check if room is a UUID (Supabase ID) or a name
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    let roomId = room;

    if (!uuidRegex.test(room)) {
      const { data: roomObj, error: fetchError } = await supabase
        .from('rooms')
        .select('id')
        .eq('name', room)
        .single();
        
      if (fetchError || !roomObj) return res.status(200).json([]); 
      roomId = roomObj.id;
    }

    const { data: messages, error } = await supabase
      .from('messages')
      .select('*, users(username, avatar)')
      .eq('room_id', roomId)
      .order('created_at', { ascending: true })
      .limit(100);

    if (error) throw error;

    // Transform to match frontend expectation (populated sender)
    const transformedMessages = messages.map(msg => ({
      ...msg,
      sender: msg.users ? { _id: msg.sender_id, username: msg.users.username, avatar: msg.users.avatar } : msg.sender_id
    }));

    res.json(transformedMessages);
  } catch (err) {
    console.error("Get messages error:", err);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
