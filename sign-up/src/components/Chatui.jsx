import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom";
import { Send, Hash, Users, Shield, ArrowLeft } from "lucide-react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL || "https://vibe-chat-production-e694.up.railway.app";
const API_URL = BASE_URL.replace(/\/$/, "");
const socket = io("https://vibe-chat-production-e694.up.railway.app");

const ChatUI = () => {
  const { id: communityId, roomId } = useParams();
  const navigate = useNavigate();

  // Determine the room name and type
  const activeRoom = communityId || roomId || "general";
  const isPrivate = !!roomId;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const username = localStorage.getItem("username") || "Anonymous";
  const userId = localStorage.getItem("userId");
  const isGuest = localStorage.getItem("isGuest") === "true";

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Sync room to local storage and handle connection
  useEffect(() => {
    if (activeRoom) {
      localStorage.setItem("room", activeRoom);
      socket.emit("join_room", activeRoom);

      const fetchHistory = async () => {
        try {
          const res = await axios.get(`${API_URL}/api/messages/${activeRoom}`);
          setMessages(res.data);
        } catch (err) {
          console.error("Failed to fetch history:", err);
        }
      };

      fetchHistory();

      const handleReceive = (data) => {
        if (data.room === activeRoom) {
          setMessages((prev) => [...prev, data]);
        }
      };

      socket.on("receive_message", handleReceive);
      return () => socket.off("receive_message", handleReceive);
    }
  }, [activeRoom]);

  // Format room name for display
  const roomParts = activeRoom.split(":");
  const isSubChannel = roomParts.length > 1;
  const displayRoom = isSubChannel ? roomParts[roomParts.length - 1] : activeRoom;
  const parentCommunity = isSubChannel ? roomParts[0] : null;

  const sendMessage = () => {
    if (isGuest) return alert("Guests cannot send messages. Please sign in!");
    if (!message.trim()) return;

    const msgData = {
      text: message,
      senderId: userId,
      room: activeRoom,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit("send_message", msgData);
    // Real-time update will come from 'receive_message' or we can optimistic update
    // For now, let's wait for the socket to return the populated message to avoid mismatch
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-950/50 rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl backdrop-blur-sm w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 bg-gray-900/50 border-b border-gray-800 backdrop-blur-md">
        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="bg-iris-600/20 p-2 rounded-xl text-iris-500">
            {isPrivate ? <Shield size={20} /> : <Hash size={20} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              {parentCommunity ? (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium text-lg italic tracking-tight">c/{parentCommunity}</span>
                  <span className="text-gray-700 text-xl font-light">/</span>
                  <h2 className="text-xl font-black text-white capitalize tracking-wide">{displayRoom}</h2>
                </div>
              ) : (
                <h2 className="text-xl font-black text-white capitalize tracking-wide flex items-center gap-2">
                  <span className="text-iris-500/80 text-[10px] font-black bg-iris-500/10 px-2 py-0.5 rounded border border-iris-500/20 uppercase tracking-widest">Community</span>
                  {displayRoom}
                </h2>
              )}
            </div>
            <span className="text-xs text-green-500 flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-medium tracking-wide opacity-80">Live Connection</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-[10px] font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <button className="text-gray-400 hover:text-white p-2">
            <Users size={20} />
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-800">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-gray-700 border border-gray-800">
              <Hash size={32} />
            </div>
            <div>
              <p className="text-gray-400 font-medium">Welcome to the beginning of the #{displayRoom} channel.</p>
              <p className="text-gray-600 text-sm">This is a safe space for community members to chat.</p>
            </div>
          </div>
        ) : (
          messages.map((msg, i) => {
            const isMe = msg.sender?._id === userId || msg.sender === username;
            const senderName = msg.sender?.username || msg.sender || "Unknown";
            const senderInitial = senderName[0]?.toUpperCase() || "?";

            return (
              <div
                key={msg._id || i}
                className={`flex group ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-2 md:gap-3 max-w-[90%] md:max-w-[85%] ${isMe ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-xs md:text-sm shadow-inner transition-transform group-hover:scale-105 ${isMe ? "bg-gradient-to-br from-iris-400 to-iris-600 text-white shadow-iris-500/20" : "bg-gray-800 text-gray-300 border border-gray-700/50"
                      }`}>
                      {senderInitial}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="text-[10px] md:text-xs font-bold text-gray-300">{senderName}</span>
                      <span className="text-[9px] md:text-[10px] text-gray-600 uppercase tracking-tighter">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Just now"}
                      </span>
                    </div>
                    <div className={`px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-sm leading-relaxed transition-all ${isMe
                      ? "bg-gradient-to-br from-iris-500 to-iris-600 text-white rounded-tr-none shadow-iris-500/20"
                      : "bg-gray-800/80 text-gray-100 rounded-tl-none border border-gray-700/50 backdrop-blur-sm"
                      }`}>
                      <p className="text-sm md:text-[15px]">{msg.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-gray-900/30 border-t border-gray-800/50">
        {isGuest ? (
          <div className="flex flex-col items-center justify-center py-4 bg-gray-950/50 rounded-2xl border border-dashed border-gray-800 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-gray-500 text-sm font-medium mb-3">You are exploring in Guest Mode</p>
            <button
              onClick={() => navigate('/')}
              className="bg-iris-600/10 hover:bg-iris-600/20 text-iris-400 px-6 py-2 rounded-xl border border-iris-500/20 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 group"
            >
              Sign in to participate
              <LogIn size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="relative flex items-center gap-3 bg-gray-900/50 border border-gray-800/50 rounded-2xl p-2.5 focus-within:border-iris-500/40 focus-within:ring-1 focus-within:ring-iris-500/20 transition-all shadow-xl group">
            <input
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-1.5 text-[15px] placeholder-gray-600 font-medium"
              value={message}
              placeholder={`Message #${displayRoom}`}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className={`p-2.5 rounded-xl transition-all duration-300 ${message.trim()
                ? "bg-iris-500 text-white hover:bg-iris-400 hover:scale-105 active:scale-95 shadow-lg shadow-iris-500/20"
                : "text-gray-700 bg-gray-800/50"
                }`}
              disabled={!message.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        )}
        {!isGuest && (
          <p className="text-[10px] text-gray-600 mt-2 px-2 italic">
            Press <span className="font-bold">Enter</span> to send your message
          </p>
        )}
      </div>
    </div>

  );
};

export default ChatUI;
