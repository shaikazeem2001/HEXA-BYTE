import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, TrendingUp, Users, MessageSquare, Plus, X, Globe, Lock, Copy, CheckCircle2, Loader2 } from "lucide-react";
import axios from "../api/Axios";

const API_URL = import.meta.env.VITE_API_URL || "https://vibe-chat-production-e694.up.railway.app";

const Profilepage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const isGuest = localStorage.getItem("isGuest") === "true";
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  useEffect(() => {
    const communities = JSON.parse(localStorage.getItem("joinedCommunities") || "[]");
    setJoinedCommunities(communities);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommunity, setNewCommunity] = useState({ name: "", description: "", isPrivate: false });
  const [isLoading, setIsLoading] = useState(false);
  const [createdRoom, setCreatedRoom] = useState(null);

  const handleCreateCommunity = async () => {
    if (isGuest) return alert("Guests cannot create communities. Please sign in!");
    if (!newCommunity.name.trim()) return alert("Please enter a community name");
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}/api/rooms`, newCommunity, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Update local joined communities
      const updated = [res.data, ...joinedCommunities];
      setJoinedCommunities(updated);
      localStorage.setItem("joinedCommunities", JSON.stringify(updated));

      if (newCommunity.isPrivate) {
        setCreatedRoom(res.data);
      } else {
        setIsModalOpen(false);
        setNewCommunity({ name: "", description: "", isPrivate: false });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create community");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const trending = [
    { id: '1', name: 'r/reactjs', members: '450k' },
    { id: '2', name: 'r/tailwindcss', members: '120k' },
    { id: '3', name: 'r/javascript', members: '2.1M' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Welcome back, {username}! {isGuest && <span className="text-xs bg-iris-600/30 text-iris-400 px-2 py-0.5 rounded-full ml-2 align-middle font-normal uppercase tracking-wider border border-iris-500/30">Guest Mode</span>}
          </h1>
          <p className="text-gray-400 mt-1 text-sm md:text-base italic">
            {isGuest ? "You are exploring as a guest. Sign in to join communities!" : "Check out what's happening in your communities."}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors border border-gray-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Joined Communities */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users size={20} className="text-iris-500" />
              Your Communities
            </h2>
            {joinedCommunities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {joinedCommunities.map((community, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-iris-500/50 transition-all cursor-pointer group" onClick={() => {
                    localStorage.setItem("room", community.id);
                    navigate(`/communities/${community.id}`);
                  }}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white group-hover:text-iris-500">{community.name}</h3>
                      <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">Joined</span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{community.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <p className="text-gray-400 mb-4">You haven't joined any communities yet.</p>
                <button
                  onClick={() => navigate('/join')}
                  className="text-iris-500 hover:text-iris-400 font-semibold"
                >
                  Explore Communities →
                </button>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-blue-500" />
              Recent Conversations
            </h2>
            <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
              <div className="p-4 text-sm text-gray-500 italic">
                No recent private chats.
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Trending / Suggestions */}
        <div className="space-y-6">
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-500" />
              Trending Communities
            </h2>
            <div className="space-y-4">
              {trending.map((item) => (
                <div key={item.id} className="flex justify-between items-center group cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.members} members</p>
                  </div>
                  <button className="text-xs font-bold text-iris-500 hover:text-iris-400 border border-iris-500/30 px-3 py-1 rounded-full">
                    View
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-sm text-gray-400 hover:text-white font-medium transition-colors">
              Show more
            </button>
          </section>

          <div className="bg-gradient-to-br from-iris-600 to-iris-800 rounded-xl p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Create your own!</h3>
            <p className="text-sm text-iris-100 mb-4">Want to start a new community? Lead the way and build something great.</p>
            <button
              onClick={() => {
                if (isGuest) {
                  alert("Please login to create a community!");
                  navigate("/");
                } else {
                  setIsModalOpen(true);
                }
              }}
              className="w-full bg-white text-iris-600 font-bold py-2 rounded-lg hover:bg-iris-50 shadow-lg transition-colors"
            >
              Start a Community
            </button>
          </div>
        </div>
      </div>

      {/* Create Community Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-200">
            {createdRoom ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-500/20 p-4 rounded-full text-green-500">
                    <CheckCircle2 size={48} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Community Created!</h2>
                <p className="text-gray-400 mb-8">Share this invite code with your friends to join your private room.</p>

                <div className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center justify-between mb-8 group cursor-pointer" onClick={() => {
                  navigator.clipboard.writeText(createdRoom.inviteCode);
                  alert("Invite code copied!");
                }}>
                  <span className="text-xl font-mono font-bold text-iris-400 tracking-wider uppercase">{createdRoom.inviteCode}</span>
                  <Copy size={20} className="text-gray-500 group-hover:text-white" />
                </div>

                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCreatedRoom(null);
                    setNewCommunity({ name: "", description: "", isPrivate: false });
                  }}
                  className="w-full bg-iris-600 hover:bg-iris-500 text-white font-bold py-4 rounded-2xl transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black text-white tracking-tight">New Community</h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Community Name</label>
                    <input
                      type="text"
                      placeholder="e.g. PixelArt Enthusiasts"
                      className="w-full bg-black border border-gray-800 text-white px-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all font-medium"
                      value={newCommunity.name}
                      onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Description (Optional)</label>
                    <textarea
                      placeholder="What is this community about?"
                      className="w-full bg-black border border-gray-800 text-white px-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all font-medium h-24 resize-none"
                      value={newCommunity.description}
                      onChange={(e) => setNewCommunity({ ...newCommunity, description: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Visibility</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setNewCommunity({ ...newCommunity, isPrivate: false })}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${!newCommunity.isPrivate ? "bg-iris-600/10 border-iris-500 text-white" : "bg-black border-gray-800 text-gray-500 hover:border-gray-700"}`}
                      >
                        <Globe size={20} />
                        <span className="text-xs font-bold uppercase tracking-tight">Public</span>
                      </button>
                      <button
                        onClick={() => setNewCommunity({ ...newCommunity, isPrivate: true })}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${newCommunity.isPrivate ? "bg-iris-600/10 border-iris-500 text-white" : "bg-black border-gray-800 text-gray-500 hover:border-gray-700"}`}
                      >
                        <Lock size={20} />
                        <span className="text-xs font-bold uppercase tracking-tight">Private</span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleCreateCommunity}
                    disabled={isLoading}
                    className="w-full bg-iris-600 hover:bg-iris-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-iris-600/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Plus size={20} />}
                    CREATE COMMUNITY
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilepage;
