import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profilepage from "./components/Profilepage";
import ChatUI from "./components/Chatui";
import JoinRoom from "./components/JoinRoom";
import Exploretopics from "./components/Exploretopics";
import Layout from "./components/Layout";
import PrivateRooms from "./components/PrivateRooms";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./components/Settings";

function App() {
  // Sync the theme to the HTML document root on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected/Authenticated Routes within Layout */}
      <Route path="/profile" element={<ProtectedRoute><Layout><Profilepage /></Layout></ProtectedRoute>} />
      <Route path="/join" element={<ProtectedRoute><Layout><JoinRoom /></Layout></ProtectedRoute>} />
      <Route path="/exploretopics" element={<ProtectedRoute><Layout><Exploretopics /></Layout></ProtectedRoute>} />
      <Route path="/communities/:id" element={<ProtectedRoute><Layout><ChatUI /></Layout></ProtectedRoute>} />
      <Route path="/privaterooms" element={<ProtectedRoute><Layout><PrivateRooms /></Layout></ProtectedRoute>} />
      <Route path="/chat/:roomId" element={<ProtectedRoute><Layout><ChatUI /></Layout></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Layout><Settings /></Layout></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
