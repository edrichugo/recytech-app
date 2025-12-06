export default function StatCard({ label, value, color, bg }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
      <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center mb-3`}>
        <span className={`text-lg ${color}`}>●</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-xs uppercase font-bold tracking-wider">{label}</p>
      <p className={`text-2xl font-bold ${color} mt-1`}>{value}</p>
    </div>
  );
}