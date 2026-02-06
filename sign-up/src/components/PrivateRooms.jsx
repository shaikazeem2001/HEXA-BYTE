import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Plus, Key, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import axios from "../api/Axios";

const API_URL = import.meta.env.VITE_API_URL || "https://vibe-chat-production-e694.up.railway.app";

const PrivateRooms = () => {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [roomCode, setRoomCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedRooms = JSON.parse(localStorage.getItem("joinedCommunities") || "[]");
        const privateOnly = savedRooms.filter(r => r.isPrivate);
        setRooms(privateOnly);
    }, []);

    const joinRoomByCode = async () => {
        if (!roomCode.trim()) return;
        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post(`${API_URL}/api/rooms/join/invite`, { inviteCode: roomCode }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Add to joined communities in localStorage
            const joined = JSON.parse(localStorage.getItem("joinedCommunities") || "[]");
            if (!joined.find(c => c._id === res.data.room._id)) {
                joined.push(res.data.room);
                localStorage.setItem("joinedCommunities", JSON.stringify(joined));
            }

            setRooms(prev => [...prev.filter(r => r._id !== res.data.room._id), res.data.room]);
            setRoomCode("");
            alert("Successfully joined room!");
            navigate(`/communities/${res.data.room.id || res.data.room.name}`);
        } catch (err) {
            alert(err.response?.data?.message || "Failed to join room");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                        <Lock className="text-iris-500" size={32} />
                        Private Rooms
                    </h1>
                    <p className="text-gray-400">Secure spaces for your private and exclusive conversations.</p>
                </div>
                <button
                    onClick={() => navigate('/profile')}
                    className="bg-iris-600 hover:bg-iris-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-iris-600/20"
                >
                    <Plus size={20} />
                    New Community
                </button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* List of joined private rooms */}
                <section>
                    <h2 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4 px-1">Your Rooms</h2>
                    <div className="space-y-4">
                        {rooms.length > 0 ? (
                            rooms.map((room) => (
                                <div
                                    key={room._id}
                                    onClick={() => navigate(`/communities/${room._id}`)}
                                    className="bg-gray-900 border border-gray-800 p-5 rounded-2xl hover:border-iris-500/50 transition-all cursor-pointer group flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-iris-600/10 rounded-xl flex items-center justify-center text-iris-500">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-iris-500 transition-colors">{room.name}</h3>
                                            <p className="text-xs text-gray-500 flex items-center gap-1 uppercase tracking-tight font-black">
                                                Private Member
                                            </p>
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-gray-700 group-hover:text-iris-500 transform group-hover:translate-x-1 transition-all" />
                                </div>
                            ))
                        ) : (
                            <div className="border-2 border-dashed border-gray-800 rounded-2xl p-10 text-center">
                                <p className="text-gray-600 italic">No private rooms joined yet.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Join by code section */}
                <section className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                            <Key size={24} className="text-iris-500" />
                            Join via Private ID
                        </h2>
                        <p className="text-sm text-gray-400 italic">Have an invitation code? Enter it below to join a secure room instantly.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] px-1">Invite Code</label>
                            <input
                                type="text"
                                placeholder="e.g. A1B2C3"
                                className="w-full bg-black border border-gray-800 rounded-2xl px-4 py-5 text-center text-2xl font-black tracking-[0.3em] text-white focus:outline-none focus:border-iris-500 transition-all uppercase placeholder:tracking-normal placeholder:opacity-20"
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value)}
                                maxLength={6}
                            />
                        </div>
                        <button
                            onClick={joinRoomByCode}
                            disabled={isLoading}
                            className="w-full bg-iris-600 text-white font-black py-4 rounded-2xl hover:bg-iris-500 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-iris-600/20 active:scale-95 disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Key size={20} />}
                            JOIN PRIVATE ROOM
                        </button>
                    </div>

                    <div className="mt-10 p-5 bg-iris-600/5 rounded-2xl border border-iris-600/10">
                        <p className="text-[10px] text-iris-400/80 text-center leading-relaxed font-bold uppercase tracking-wider">
                            Private rooms are restricted to invited members only. Respect the privacy of the room.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivateRooms;
