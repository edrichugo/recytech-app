import React, { useState } from 'react';

export default function Setor() {
  const [filePreview, setFilePreview] = useState(null);
  // State untuk data form
  const [formData, setFormData] = useState({
    jenis: 'Smartphone',
    berat: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Data dikirim:", formData, filePreview);
    alert("Setoran berhasil dikonfirmasi (Simulasi)");
  };

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Setor E-Waste ♻</h2>
        <p className="text-gray-500 dark:text-gray-400">Isi formulir di bawah ini sebelum datang ke Dropbox.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6 transition-colors">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">1. Upload Foto Barang</label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-52 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-indigo-400 transition relative overflow-hidden group">
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
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">2. Jenis Barang</label>
              <div className="relative">
                <select 
                    name="jenis"
                    value={formData.jenis}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 dark:border-gray-600 border rounded-xl p-3 bg-white dark:bg-gray-700 dark:text-white appearance-none focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                >
                    <option value="Smartphone">📱 Smartphone</option>
                    <option value="Laptop">💻 Laptop / PC</option>
                    <option value="Baterai">🔋 Baterai</option>
                    <option value="Kabel">🔌 Kabel / Charger</option>
                </select>
                <span className="absolute right-4 top-3.5 text-gray-400 pointer-events-none">▼</span>
              </div>
           </div>
           <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">3. Estimasi Berat</label>
              <div className="relative">
                <input 
                    type="number" 
                    name="berat"
                    value={formData.berat}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 dark:border-gray-600 border rounded-xl p-3 bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors" 
                    placeholder="0" 
                />
                <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 font-medium text-sm">Gram</span>
              </div>
           </div>
        </div>

        <button onClick={handleSubmit} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 text-lg">
          Konfirmasi Setoran
        </button>
      </div>
    </div>
  );
}