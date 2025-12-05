import { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [filePreview, setFilePreview] = useState(null);

  // Logic Upload Foto Sederhana
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      
      {/* DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="fade-in space-y-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10 max-w-lg">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">👋 Welcome Back</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Halo, Edric Hugo!</h2>
              <p className="mb-6 opacity-90 text-sm md:text-base">Yuk daur ulang sampah elektronikmu hari ini. Bumi bersih, dompet terisi!</p>
              <button onClick={() => setActiveTab('setor')} className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg transform hover:-translate-y-1 active:translate-y-0">
                Mulai Setor Sekarang
              </button>
            </div>
            {/* Dekorasi Visual */}
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
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 text-lg">Aktivitas Terbaru</h3>
                <button className="text-xs font-semibold text-indigo-600 hover:underline">Lihat Semua</button>
              </div>
              <div className="space-y-4">
                <ActivityItem icon="📱" title="Setor Smartphone Bekas" date="12 Okt 2025" points="+50 XP" />
                <ActivityItem icon="🔋" title="Setor Baterai & Kabel" date="09 Okt 2025" points="+30 XP" />
                <ActivityItem icon="💻" title="Setor Laptop Rusak" date="01 Okt 2025" points="+150 XP" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
               <h3 className="font-bold text-gray-800 mb-4 text-lg">Dropbox Terdekat</h3>
               <div className="flex-1 bg-gray-100 rounded-xl mb-4 relative overflow-hidden group">
                 {/* Simulasi Map */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200 pointer-events-none z-0">
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
                  <LocationItem name="Dropbox UMN" dist="0.1 km" />
                  <LocationItem name="Dropbox Summarecon" dist="2.4 km" />
               </div>
            </div>
          </div>
        </div>
      )}

      {/* SETOR E-WASTE */}
      {activeTab === 'setor' && (
        <div className="fade-in max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Setor E-Waste ♻</h2>
            <p className="text-gray-500">Isi formulir di bawah ini sebelum datang ke Dropbox.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1. Upload Foto Barang</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl h-52 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 hover:border-indigo-400 transition relative overflow-hidden group">
                <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                {filePreview ? (
                  <img src={filePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-gray-400 group-hover:text-indigo-500 transition">
                    <div className="text-5xl mb-3">📸</div>
                    <p className="text-sm font-medium">Klik untuk upload foto</p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
               <div>
                  <label className="block text-sm font-semibold mb-2">2. Jenis Barang</label>
                  <div className="relative">
                    <select className="w-full border-gray-300 border rounded-xl p-3 bg-white appearance-none focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                        <option>📱 Smartphone</option>
                        <option>💻 Laptop / PC</option>
                        <option>🔋 Baterai</option>
                        <option>🔌 Kabel / Charger</option>
                    </select>
                    <span className="absolute right-4 top-3.5 text-gray-400 pointer-events-none">▼</span>
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-semibold mb-2">3. Estimasi Berat</label>
                  <div className="relative">
                    <input type="number" className="w-full border-gray-300 border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="0" />
                    <span className="absolute right-4 top-3 text-gray-500 font-medium text-sm">Gram</span>
                  </div>
               </div>
            </div>

            {/* Simulasi Scanner */}
            <div className="pt-4 border-t">
               <label className="block text-sm font-semibold text-gray-700 mb-2">4. Scan QR di Dropbox</label>
               <div className="bg-gray-900 rounded-xl h-24 relative overflow-hidden flex items-center justify-center text-white/60">
                  <div className="absolute w-full h-0.5 bg-green-500 scanner-line shadow-[0_0_15px_#22c55e]"></div>
                  <p className="text-xs flex items-center gap-2"><span className="text-xl">📷</span> Kamera akan aktif otomatis</p>
               </div>
            </div>

            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 text-lg">
              Konfirmasi Setoran
            </button>
          </div>
        </div>
      )}

      {/* TUKAR POIN */}
      {activeTab === 'tukar' && (
        <div className="fade-in">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
             <div>
                <h2 className="text-3xl font-bold text-gray-800">Rewards Store 🎁</h2>
                <p className="text-gray-500 mt-1">Tukarkan poin hasil daur ulangmu.</p>
             </div>
             <div className="bg-green-100 text-green-800 px-5 py-2 rounded-lg font-bold border border-green-200">
                Saldo Kamu: 120 XP
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RewardCard icon="🍔" title="Voucher Makan" cost="250 XP" desc="Potongan Rp 25.000 di semua FoodCourt mitra." color="bg-orange-100" />
            <RewardCard icon="🛒" title="Voucher Belanja" cost="500 XP" desc="Potongan Rp 50.000 minimarket terdekat." color="bg-blue-100" />
            <RewardCard icon="🎮" title="Billing Warnet" cost="300 XP" desc="Main 3 Jam Gratis di CyberLounge." color="bg-purple-100" />
            <RewardCard icon="☕" title="Kopi Gratis" cost="150 XP" desc="Satu cup kopi susu gula aren." color="bg-amber-100" />
            <RewardCard icon="🌳" title="Donasi Pohon" cost="1.000 XP" desc="Tanam satu pohon atas nama kamu." color="bg-green-100" />
            <RewardCard icon="🎁" title="Special Reward" cost="10.000 XP" desc="Gadget atau merchandise eksklusif dari partner sponsor bulan ini." color="bg-rose-100" />
          </div>
        </div>
      )}

      {/* PROFILE */}
      {activeTab === 'profile' && (
        <div className="fade-in max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
              <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg text-xs backdrop-blur">Edit Cover</button>
            </div>
            <div className="px-6 pb-6 relative">
              <div className="w-24 h-24 bg-white rounded-full p-1 absolute -top-7 border-4 border-white shadow-sm">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-2xl overflow-hidden">
                 <img src="https://ui-avatars.com/api/?name=Edric+Hugo&background=random" alt="Avatar" />
                </div>
              </div>
           
              <div className="mt-10 flex justify-between items-end">
                <div className="ml-28"> 
                  <h2 className="text-2xl font-bold text-gray-900">Edric Hugo</h2>
                  <p className="text-gray-500">Mahasiswa Informatika</p>
                </div>              
                <button className="text-indigo-600 font-semibold text-sm hover:bg-indigo-50 px-4 py-2 rounded-lg transition">Edit Profil</button>
              </div>
            </div>
        </div>
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wide">Pengaturan</div>
              <div className="divide-y">
                 <ProfileMenu icon="🌙" label="Tema Aplikasi" value="Terang" />
                 <ProfileMenu icon="🔒" label="Keamanan & Password" />
                 <ProfileMenu icon="🌐" label="Bahasa" value="Indonesia" />
                 <ProfileMenu icon="🔔" label="Notifikasi" value="On" />
                 <ProfileMenu icon="🚪" label="Keluar Akun" isRed />
              </div>
           </div>
        </div>
      )}

    </Layout>
  );
}


const StatCard = ({ label, value, color, bg }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
    <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center mb-3`}>
      <span className={`text-lg ${color}`}>●</span>
    </div>
    <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">{label}</p>
    <p className={`text-2xl font-bold ${color} mt-1`}>{value}</p>
  </div>
);

const ActivityItem = ({ icon, title, date, points }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition border border-transparent hover:border-gray-100 cursor-default group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-xl group-hover:scale-110 transition">{icon}</div>
      <div>
        <p className="font-bold text-gray-800 text-sm md:text-base">{title}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
    <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg text-sm">{points}</span>
  </div>
);

const LocationItem = ({ name, dist }) => (
   <div className="flex justify-between items-center p-3 border rounded-xl hover:bg-gray-50 cursor-pointer transition">
      <div className="flex items-center gap-3">
         <div className="text-red-500">📍</div>
         <span className="font-semibold text-sm text-gray-700">{name}</span>
      </div>
      <span className="text-xs text-gray-400">{dist}</span>
   </div>
);

const RewardCard = ({ icon, title, cost, desc, color }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group flex flex-col h-full">
    <div className={`h-36 ${color} flex items-center justify-center text-5xl group-hover:scale-105 transition duration-500`}>{icon}</div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded font-bold">{cost}</span>
      </div>
      <p className="text-sm text-gray-500 mb-6 flex-1">{desc}</p>
      <button className="w-full border-2 border-indigo-600 text-indigo-600 font-bold py-2.5 rounded-xl hover:bg-indigo-600 hover:text-white transition">Tukar Sekarang</button>
    </div>
  </div>
);

const ProfileMenu = ({ icon, label, value, isRed }) => (
  <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition group">
    <span className={`flex items-center gap-4 ${isRed ? 'text-red-600 font-medium' : 'text-gray-700 font-medium'}`}>
      <span className="text-xl opacity-70 group-hover:opacity-100">{icon}</span> {label}
    </span>
    <div className="flex items-center gap-2">
      {value && <span className="text-xs text-gray-400 font-medium">{value}</span>}
      <span className="text-gray-300">›</span>
    </div>
  </button>
);

export default App;