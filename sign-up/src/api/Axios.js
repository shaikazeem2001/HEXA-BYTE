import axios from "axios";

const instance = axios.create({
  // Force local API on dev, Render API on production (bypassing sticky Vercel dashboard variables)
  baseURL: import.meta.env.DEV ? "http://localhost:9096" : "https://vibe-chat-uz4a.onrender.com",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  // Authentication passes entirely over Secure HttpOnly Cookies via `withCredentials: true`
  return config;
});

export default instance;
