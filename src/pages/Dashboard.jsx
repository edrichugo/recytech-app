import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/Statcard';
import { activityList } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="fade-in space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="relative z-10 max-w-lg">
          <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">👋 Welcome Back</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Halo, Edric Hugo!</h2>
          <p className="mb-6 opacity-90 text-sm md:text-base">Yuk daur ulang sampah elektronikmu hari ini. Bumi bersih, dompet terisi!</p>
          <Link to="/setor" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 active:translate-y-0">
            Mulai Setor Sekarang
          </Link>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition duration-700"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Statistik Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Poin" value="120" color="text-indigo-600" bg="bg-indigo-50" />
        <StatCard label="Setoran" value="8x" color="text-green-600" bg="bg-green-50" />
        <StatCard label="Berat E-Waste" value="2.4 kg" color="text-orange-500" bg="bg-orange-50" />
        <StatCard label="Level User" value="Gold" color="text-blue-500" bg="bg-blue-50" />
      </div>

      {/* Aktivitas & Maps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 dark:text-white text-lg">Aktivitas Terbaru</h3>
            <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Lihat Semua</button>
          </div>
          <div className="space-y-4">
            {activityList.map((item) => (
               <div key={item.id} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition border border-transparent hover:border-gray-100 dark:hover:border-gray-600 cursor-default group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-xl group-hover:scale-110 transition">{item.icon}</div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
                <span className="font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-lg text-sm">{item.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col transition-colors">
           <h3 className="font-bold text-gray-800 dark:text-white mb-4 text-lg">Dropbox Terdekat</h3>
           <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-xl mb-4 relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200 dark:bg-gray-700 pointer-events-none z-0">
               <span className="text-xs">Loading Map...</span>
             </div>
             <iframe 
                className="w-full h-full opacity-80 group-hover:opacity-100 transition relative z-10" 
                src="https://maps.google.com/maps?q=Universitas+Multimedia+Nusantara&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy">
             </iframe>
           </div>
           <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition">
                  <div className="flex items-center gap-3">
                     <div className="text-red-500">📍</div>
                     <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Dropbox UMN</span>
                  </div>
                  <span className="text-xs text-gray-400">0.1 km</span>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
}