import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://vibe-chat-eta.vercel.app",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  // Authentication passes entirely over Secure HttpOnly Cookies via `withCredentials: true`
  return config;
});

export default instance;
