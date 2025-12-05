import React from 'react';

const Layout = ({ children, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'setor', label: 'Setor E-Waste', icon: '♻' },
    { id: 'tukar', label: 'Tukar Poin', icon: '🎁' },
    { id: 'profile', label: 'Profil Saya', icon: '👤' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* === DESKTOP SIDEBAR === */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r h-screen fixed left-0 top-0 z-20">
        <div className="p-6 border-b flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg shadow-sm"></div>
          <h1 className="text-xl font-bold tracking-tight text-primary">RecyTech</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 font-medium ${
                activeTab === item.id 
                  ? 'bg-indigo-50 text-primary shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="bg-indigo-900 rounded-xl p-4 text-white text-center shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs opacity-75 mb-1 font-medium">Total Saldo Poin</p>
              <p className="text-2xl font-bold">120 XP</p>
            </div>
            {/* Hiasan background */}
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
          </div>
        </div>
      </aside>

      {/* === MOBILE HEADER === */}
      <header className="md:hidden bg-white/90 backdrop-blur-md shadow-sm p-4 sticky top-0 z-30 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-600 rounded-md"></div>
           <h1 className="font-bold text-lg text-primary">RecyTech</h1>
        </div>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">120 XP</span>
      </header>

      {/* === MAIN CONTENT === */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pb-24 md:pb-8 max-w-5xl mx-auto w-full">
        {children}
      </main>

      {/* === MOBILE BOTTOM NAV === */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center transition-colors ${
                activeTab === item.id ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className={`text-xl mb-0.5 transition-transform ${activeTab === item.id ? '-translate-y-1' : ''}`}>{item.icon}</span>
              <span className="text-[10px] font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;