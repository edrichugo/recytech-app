export default function RewardCard({ icon, title, cost, desc, color }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition group flex flex-col h-full">
      <div className={`h-36 ${color} flex items-center justify-center text-5xl group-hover:scale-105 transition duration-500`}>
        {icon}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800 dark:text-white text-lg">{title}</h3>
          <span className="bg-gray-900 dark:bg-black text-white text-xs px-2 py-1 rounded font-bold">{cost}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">{desc}</p>
        <button className="w-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-bold py-2.5 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:text-white transition">
          Tukar Sekarang
        </button>
      </div>
    </div>
  );
}