import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import Setor from './pages/Setor';
import Tukar from './pages/Tukar';
import Profile from './pages/Profile';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('theme') || 'light';
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const repoName = import.meta.env.MODE === 'production' ? '/recytech-app' : '/';

  return (
    <BrowserRouter basename={repoName}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setor" element={<Setor />} />
          <Route path="/tukar" element={<Tukar />} />
          <Route path="/profile" element={<Profile theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}