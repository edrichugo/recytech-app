import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoRecytech from '../assets/logo.png'; 

const Layout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/setor', label: 'Setor E-Waste', icon: '♻' },
    { path: '/tukar', label: 'Tukar Poin', icon: '🎁' },
    { path: '/profile', label: 'Profil Saya', icon: '👤' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 h-screen fixed left-0 top-0 z-20 transition-colors">
        <div className="p-6 border-b dark:border-gray-700 flex items-center gap-3">
          <img 
            src={logoRecytech} 
            alt="RecyTech Logo" 
            className="w-10 h-10 object-contain filter drop-shadow-sm" 
          />
          <h1 className="text-xl font-bold tracking-tight text-indigo-900 dark:text-white">RecyTech</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${
                currentPath === item.path 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t dark:border-gray-700">
          <div className="bg-indigo-900 rounded-xl p-4 text-white text-center shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs opacity-75 mb-1 font-medium">Total Saldo Poin</p>
              <p className="text-2xl font-bold">120 XP</p>
            </div>
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>
      </aside>

      {/* === MOBILE HEADER === */}
      <header className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm p-4 sticky top-0 z-30 flex justify-between items-center transition-colors">
        <div className="flex items-center gap-2">
           <img 
             src={logoRecytech} 
             alt="Logo" 
             className="w-8 h-8 object-contain" 
           />
           <h1 className="font-bold text-lg text-indigo-900 dark:text-white">RecyTech</h1>
        </div>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">120 XP</span>
      </header>

      {/* === MAIN CONTENT === */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pb-24 md:pb-8 max-w-5xl mx-auto w-full">
        {children}
      </main>

      {/* === MOBILE BOTTOM NAV === */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 pb-safe transition-colors">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-1 flex flex-col items-center justify-center transition-colors ${
                currentPath === item.path ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600'
              }`}
            >
              <span className={`text-xl mb-0.5 transition-transform ${currentPath === item.path ? '-translate-y-1' : ''}`}>{item.icon}</span>
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;