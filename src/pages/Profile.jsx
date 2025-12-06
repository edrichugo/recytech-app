import React, { useState } from 'react';
import ProfileMenu from '../components/ProfileMenu';

export default function Profile({ theme, toggleTheme }) {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 transition-colors duration-300">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
          <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg text-xs backdrop-blur">Edit Cover</button>
        </div>
        <div className="px-6 pb-6 relative">
          <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full p-1 absolute -top-12 border-4 border-white dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-2xl overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Edric+Hugo&background=random" alt="Avatar" />
            </div>
          </div>
        
          <div className="mt-14 flex justify-between items-end">
            <div className="ml-28"> 
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edric Hugo</h2>
              <p className="text-gray-500 dark:text-gray-400">Mahasiswa Informatika</p>
            </div>              
            <button className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition">Edit Profil</button>
          </div>
        </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
       <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Pengaturan</div>
       <div className="divide-y dark:divide-gray-700">
          <ProfileMenu 
            icon={theme === 'light' ? "🌙" : "☀️"} 
            label="Tema Aplikasi" 
            value={theme === 'light' ? "Terang" : "Gelap"} 
            onClick={toggleTheme} 
          />
          <ProfileMenu icon="🔒" label="Keamanan & Password" />
          <ProfileMenu icon="🌐" label="Bahasa" value="Indonesia" />
          <ProfileMenu 
            icon={notifications ? "🔔" : "🔕"} 
            label="Notifikasi" 
            value={notifications ? "On" : "Off"}
            onClick={() => setNotifications(!notifications)}
          />
          <ProfileMenu icon="🚪" label="Keluar Akun" isRed />
       </div>
    </div>
  </div>
  );
}