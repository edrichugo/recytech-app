import React, { useState } from 'react';
import ProfileMenu from '../components/ProfileMenu';

export default function Profile({ theme, toggleTheme }) {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6 transition-colors duration-300">
        
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
          <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg text-xs backdrop-blur font-medium transition">
            Edit Cover
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="px-5 pb-5 relative">
          <div className="flex flex-row items-end -mt-8 md:-mt-10 gap-3 md:gap-4">
            
            {/* Foto Profil */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full border-4 border-white dark:border-gray-800 shadow-md overflow-hidden flex-shrink-0 z-10">
              <img 
                src="https://ui-avatars.com/api/?name=Edric+Hugo&background=random&size=128" 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama & Status */}
            <div className="flex-1 text-left mb-1 pt-8 md:pt-0">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Edric Hugo
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium">
                Mahasiswa Informatika
              </p>
            </div>

            {/* Tombol Edit */}
            <button className="mb-1 text-indigo-600 dark:text-indigo-400 font-semibold text-xs md:text-sm bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-3 py-2 md:px-5 md:py-2.5 rounded-xl transition whitespace-nowrap">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Menu Settings */}
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