import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profilepage from "./components/Profilepage";
import ChatUI from "./components/Chatui";
import JoinRoom from "./components/JoinRoom";
import Exploretopics from "./components/Exploretopics";
import Layout from "./components/Layout";
import PrivateRooms from "./components/PrivateRooms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected/Authenticated Routes within Layout */}
      <Route path="/profile" element={<Layout><Profilepage /></Layout>} />
      <Route path="/join" element={<Layout><JoinRoom /></Layout>} />
      <Route path="/exploretopics" element={<Layout><Exploretopics /></Layout>} />
      <Route path="/communities/:id" element={<Layout><ChatUI /></Layout>} />
      <Route path="/privaterooms" element={<Layout><PrivateRooms /></Layout>} />
      <Route path="/chat/:roomId" element={<Layout><ChatUI /></Layout>} />
    </Routes>
  );
}

export default App;
