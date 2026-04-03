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
    <aside className={`w-64 h-screen bg-white dark:bg-[#0C0A15] text-gray-600 dark:text-gray-300 flex flex-col fixed left-0 top-0 border-r border-gray-200 dark:border-gray-800/80 z-50 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <div className="p-6 flex items-center justify-between">
        <h1 onClick={() => { navigate('/profile'); setIsOpen(false); }} className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer flex items-center gap-2 transition-colors">
          <span className="text-gray-900 dark:text-white">HEXA</span> BYTE
        </h1>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 transition-colors"
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
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-gray-200 dark:hover:border-slate-700/50'
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

      <div className="p-4 space-y-4 border-t border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-[#0C0A15]/80 backdrop-blur-sm transition-colors">
        <NavLink
          to="/join"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center gap-2 w-full bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-[#0C0A15] font-bold py-4 px-4 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          <Plus size={20} />
          Join Community
        </NavLink>

        <NavLink
          to="/settings"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"
        >
          <Settings size={24} />
          <span className="font-semibold">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
