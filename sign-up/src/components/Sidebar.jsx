import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Rocket, Hash, MessageSquare, Megaphone, Settings, Plus, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/profile' },
    { icon: <Rocket size={24} />, label: 'Popular', path: '/exploretopics' },
    { icon: <MessageSquare size={24} />, label: 'Private Rooms', path: '/privaterooms' },
    { icon: <Megaphone size={24} />, label: 'Advertise', path: '#' },
  ];

  return (
    <aside className={`w-64 h-screen bg-black text-gray-300 flex flex-col fixed left-0 top-0 border-r border-gray-800 z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <div className="p-6 flex items-center justify-between">
        <h1 onClick={() => { navigate('/profile'); setIsOpen(false); }} className="text-2xl font-bold text-white cursor-pointer flex items-center gap-2">
          <span className="text-white">Vibe</span>Chat
        </h1>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg text-gray-400"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-iris-600/10 text-iris-500 shadow-sm' : 'hover:bg-gray-900 border border-transparent hover:border-gray-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={isActive ? 'scale-110' : ''}>
                  {item.icon}
                </div>
                <span className="font-semibold tracking-tight">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 space-y-4 border-t border-gray-900 bg-black/50 backdrop-blur-sm">
        <NavLink
          to="/join"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-200 text-black font-bold py-4 px-4 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          <Plus size={20} />
          Join Community
        </NavLink>

        <NavLink
          to="#"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-900 border border-transparent hover:border-gray-800 text-gray-500 hover:text-white transition-all"
        >
          <Settings size={24} />
          <span className="font-semibold">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
