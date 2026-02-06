import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/Axios";
import { Mail, Lock, LogIn, UserPlus, Loader2, Sparkles } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9096";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem('userId', res.data.user.id);
      localStorage.setItem('username', res.data.user.username);
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900/50 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-iris-600/20 rounded-full blur-3xl group-hover:bg-iris-600/30 transition-all duration-700"></div>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">

          </div>
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight whitespace-nowrap">VibeChat</h1>
          <p className="text-gray-400 text-sm">Welcome back! login to continue vibing.</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-iris-500 transition-colors" size={18} />
              <input
                type="email"
                placeholder="name@vibe.chat"
                className="w-full bg-black border border-gray-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all shadow-inner font-medium"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-iris-500 transition-colors" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black border border-gray-800 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all shadow-inner font-medium"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-iris-600 hover:bg-iris-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-iris-600/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-4 group disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />}
            LOGIN
          </button>
        </div>

        <div className="mt-12 text-center border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-iris-500 hover:text-iris-400 font-bold transition-colors inline-flex items-center gap-1 group">
              Create an account
              <UserPlus size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
