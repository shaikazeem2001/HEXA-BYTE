import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/Axios";
import { Mail, Lock, User, UserPlus, LogIn, Loader2, Sparkles } from "lucide-react";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`/api/auth/signup`, {
        username,
        email,
        password
      });
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-6 transition-colors duration-300">
      <div className="w-full max-w-md bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group transition-colors">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-iris-600/20 rounded-full blur-3xl group-hover:bg-iris-600/30 transition-all duration-700"></div>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">

          </div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight transition-colors">Join HEXA BYTE</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">Create an account to start vibing with others.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Username</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-iris-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="HexaMaster"
                className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all shadow-inner font-medium"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-iris-500 transition-colors" size={18} />
              <input
                type="email"
                placeholder="name@hexabyte.app"
                className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all shadow-inner font-medium"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-iris-500 transition-colors" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-iris-500 transition-all shadow-inner font-medium"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <button
            onClick={handleSignup}
            disabled={isLoading}
            className="w-full bg-iris-600 hover:bg-iris-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-iris-600/20 active:scale-[0.98] flex items-center justify-center gap-3 mt-4 group disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <UserPlus size={20} className="group-hover:translate-x-1 transition-transform" />}
            Create Account
          </button>
        </div>

        <div className="mt-8 text-center border-t border-gray-200 dark:border-gray-800 pt-6 transition-colors">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-iris-500 hover:text-iris-400 font-bold transition-colors inline-flex items-center gap-1 group">
              Login here
              <LogIn size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
