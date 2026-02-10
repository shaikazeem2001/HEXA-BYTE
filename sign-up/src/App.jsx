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

function App() {
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
    </Routes>
  );
}

export default App;
