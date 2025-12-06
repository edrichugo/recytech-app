import React from 'react';
import RewardCard from '../components/RewardCard';
import { rewardList } from '../data/mockData';

export default function Tukar() {
  return (
    <div className="fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
         <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Rewards Store 🎁</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Tukarkan poin hasil daur ulangmu.</p>
         </div>
         <div className="bg-green-100 text-green-800 px-5 py-2 rounded-lg font-bold border border-green-200">
            Saldo Kamu: 120 XP
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewardList.map((reward) => (
            <RewardCard key={reward.id} {...reward} />
        ))}
      </div>
    </div>
  );
}