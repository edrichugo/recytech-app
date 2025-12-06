export default function ProfileMenu({ icon, label, value, isRed, onClick }) {
  return (
    <button onClick={onClick} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition group text-left">
      <span className={`flex items-center gap-4 ${isRed ? 'text-red-600 font-medium' : 'text-gray-700 dark:text-gray-200 font-medium'}`}>
        <span className="text-xl opacity-70 group-hover:opacity-100">{icon}</span> {label}
      </span>
      <div className="flex items-center gap-2">
        {value && <span className="text-xs text-gray-400 font-medium">{value}</span>}
        <span className="text-gray-300 dark:text-gray-600">›</span>
      </div>
    </button>
  );
}