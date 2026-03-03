import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Hash, LogIn } from 'lucide-react';
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useMessageContext
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import Avatar from 'react-nice-avatar';
import axios from "../api/Axios";

const apiKey = import.meta.env.VITE_STREAM_API_KEY;
const userToken = import.meta.env.VITE_STREAM_USER_TOKEN;

// Custom Avatar Component to inject Memojis into native Stream messages
const CustomAvatar = ({ user, name }) => {
  const [senderAvatar, setSenderAvatar] = useState(null);

  useEffect(() => {
    const config = user?.avatarConfig || user?.custom?.avatarConfig;
    if (config) {
      setSenderAvatar(config);
    } else if (user?.id) {
      const fetchAvatar = async () => {
        try {
          if (user.id !== "guest_user") {
            const res = await axios.get(`/api/auth/user/${user.id}`);
            if (res.data?.avatarConfig) {
              setSenderAvatar(res.data.avatarConfig);
            }
          }
        } catch (e) {
          console.log("Fallback avatar fetch failed:", e.message);
        }
      };
      fetchAvatar();
    }
  }, [user]);

  if (senderAvatar) {
    return (
      <div className="w-10 h-10 rounded-full shadow-lg shadow-iris-500/20 bg-gray-800 shrink-0 mx-1">
        <Avatar className="w-full h-full" {...senderAvatar} />
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-inner bg-gradient-to-br from-iris-400 to-iris-600 text-white shrink-0 mx-1">
      {name?.[0]?.toUpperCase() || user?.id?.[0]?.toUpperCase() || '?'}
    </div>
  );
};


const ChatUI = () => {
  const { id: communityId, roomId } = useParams();
  const navigate = useNavigate();
  const [channel, setChannel] = useState(null);
  const isGuest = localStorage.getItem("isGuest") === "true";
  const [appTheme, setAppTheme] = useState(() => document.documentElement.classList.contains("dark") ? "str-chat__theme-dark" : "str-chat__theme-light");

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setAppTheme(isDark ? "str-chat__theme-dark" : "str-chat__theme-light");
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const [streamUser, setStreamUser] = useState(null);
  const [dynamicToken, setDynamicToken] = useState(null);

  const activeRoom = communityId || roomId || "general";
  const isPrivate = !!roomId;

  // Sync our local user with Stream
  useEffect(() => {
    if (isGuest) {
      setStreamUser({
        id: localStorage.getItem("userId") || 'guest_user',
        name: localStorage.getItem("username") || 'Guest',
      });
      // Guests don't have backend profiles, so we fallback to dev token/static token
      // depending on Stream app settings. If auth is enabled, they need a token.
      setDynamicToken(userToken);
      return;
    }

    const fetchUserAndToken = async () => {
      try {
        const res = await axios.get("/api/auth/profile");
        const u = res.data.user;

        const mappedUser = {
          id: u.id,
          name: u.username,
          avatarConfig: u.avatarConfig || undefined,
        };

        // Fetch user-specific Stream token
        let fetchedToken = userToken; // Fallback
        try {
          const tokenRes = await axios.get("/api/auth/stream-token");
          fetchedToken = tokenRes.data.token;
          mappedUser.id = tokenRes.data.userId; // Securely bound ID
        } catch (tokenErr) {
          console.warn("Failed to fetch dynamic Stream token. Verify STREAM_API_SECRET in backend .env.", tokenErr);
          // Fallback to static token structure to prevent immediate app crash
          mappedUser.id = "throbbing-sky-5";
        }

        setStreamUser(mappedUser);
        setDynamicToken(fetchedToken);
      } catch (err) {
        console.error("Failed to fetch user for chat:", err);
      }
    };
    fetchUserAndToken();
  }, [isGuest]);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: dynamicToken,
    userData: streamUser,
  });

  useEffect(() => {
    if (!client || !streamUser || !dynamicToken) return;

    // Stream Channel IDs cannot contain certain characters like ":"
    const sanitizedId = activeRoom.replace(/[^a-zA-Z0-9_\-]/g, '_');

    const newChannel = client.channel('messaging', sanitizedId, {
      name: `Room: ${activeRoom}`,
      members: [streamUser.id],
    });

    setChannel(newChannel);
  }, [client, activeRoom, streamUser, dynamicToken]);

  if (!client || !channel || !streamUser) {
    return (
      <div className="flex flex-col h-[80vh] bg-gray-50/50 dark:bg-gray-950/50 rounded-3xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl items-center justify-center text-gray-900 dark:text-white w-full max-w-6xl mx-auto animate-pulse transition-colors duration-300">
        <div className="w-12 h-12 border-4 border-iris-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">Connecting to channel...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[85vh] bg-white dark:bg-gray-950 rounded-3xl overflow-hidden shadow-2xl w-full max-w-6xl mx-auto text-gray-900 dark:text-white border border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0 z-10 shadow-lg transition-colors duration-300">
        <div className="flex items-center gap-4 overflow-hidden">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="bg-iris-600/20 p-2.5 rounded-xl text-iris-500 shadow-inner">
            {isPrivate ? <Shield size={20} /> : <Hash size={20} />}
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-black text-gray-900 dark:text-white capitalize tracking-wide flex items-center gap-2 transition-colors">
              <span className="text-iris-500/80 text-[10px] font-black bg-iris-500/10 px-2 py-0.5 rounded border border-iris-500/20 uppercase tracking-widest hidden md:inline-block">
                Community
              </span>
              {activeRoom}
            </h2>
            <p className="text-xs text-green-500 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Connected via Stream
            </p>
          </div>
        </div>
      </div>

      {/* Stream Chat Area */}
      <div className="flex-1 overflow-hidden layout-stream-chat str-chat relative">
        <Chat client={client} theme={appTheme}>
          <Channel channel={channel} Avatar={CustomAvatar}>
            <Window>
              <MessageList />
              {isGuest ? (
                <div className="p-4 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-800/50 flex flex-col items-center transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors">Guests cannot type in this channel.</p>
                  <button onClick={() => navigate("/")} className="bg-iris-600/20 text-iris-400 px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-iris-600/30 transition-colors">
                    <LogIn size={14} /> Sign In
                  </button>
                </div>
              ) : (
                <MessageInput />
              )}
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>

      <style>{`
        .layout-stream-chat {
          display: flex;
          height: 100%;
          width: 100%;
        }
        .layout-stream-chat .str-chat__channel-list {
          width: 30%;
        }
        .layout-stream-chat .str-chat__channel {
          width: 100%;
        }
        .layout-stream-chat .str-chat__thread {
          width: 45%;
        }
        .str-chat__header-hamburger {
          display: none !important;
        }
        .str-chat__list {
          background-color: transparent !important;
          scrollbar-width: thin;
          scrollbar-color: #3f3f46 #18181b;
        }
        .str-chat__input-flat {
          background: rgba(17, 24, 39, 0.5) !important;
          border-top: 1px solid rgba(31, 41, 55, 0.5) !important;
          padding: 1rem 1.5rem !important;
        }
        .str-chat__input-flat-wrapper {
          background: rgba(31, 41, 55, 0.8) !important;
          border-radius: 1rem !important;
          border: 1px solid rgba(55, 65, 81, 0.5) !important;
        }
      `}</style>
    </div>
  );
};

export default ChatUI;
