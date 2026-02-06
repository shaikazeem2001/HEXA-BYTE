const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");

dotenv.config();

const app = express();   // ✅ create app FIRST

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const roomRoutes = require("./routes/room.routes");
const Message = require("./models/Message");
const User = require("./models/User");
const Room = require("./models/Room");

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
      // Find room by name or ID if the frontend sends a string name
      let roomObj;
      if (mongoose.Types.ObjectId.isValid(data.room)) {
        roomObj = await Room.findById(data.room);
      } else {
        roomObj = await Room.findOne({ name: data.room });
      }

      if (!roomObj) {
        // Create room if it doesn't exist (to maintain existing dynamic behavior)
        roomObj = new Room({
          name: data.room,
          createdBy: data.senderId // Assuming senderId is passed
        });
        await roomObj.save();
      }

      // Save message to MongoDB
      const newMessage = new Message({
        room: roomObj._id,
        sender: data.senderId, // Assuming frontend sends user ID
        text: data.text
      });
      await newMessage.save();

      // Emit to everyone in the room
      const populatedMsg = await Message.findById(newMessage._id).populate("sender", "username avatar");
      io.to(data.room).emit("receive_message", {
        ...populatedMsg._doc,
        room: data.room // Keep the room name for frontend compatibility
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
