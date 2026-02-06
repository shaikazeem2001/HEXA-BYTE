import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-black text-white relative">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar with mobile state */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <main className="flex-1 md:ml-64 w-full h-screen flex flex-col min-w-0">
                {/* Mobile Header Bar */}
                <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-30">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 hover:bg-gray-800 rounded-lg text-gray-400"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-white tracking-tight italic">VibeChat</span>
                    <div className="w-10"></div> {/* Spacer */}
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 h-full min-w-0">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
