'use client';

import { useState } from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleMode }) => {
  return (
    <button
      onClick={toggleMode}
      className={`relative w-16 h-9 flex items-center rounded-full transition-all duration-300 focus:outline-none shadow-lg bg-gradient-to-br ${
        isDarkMode
          ? 'from-gray-800 to-gray-900' // ダーク時のグラデ
          : 'from-yellow-200 to-yellow-400' // ライト時のグラデ
      } hover:scale-105 active:scale-95`}
      aria-label="Toggle dark mode"
    >
      {/* 太陽アイコン */}
      <span
        className={`absolute left-2 text-xl transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
        role="img"
        aria-label="Light mode"
      >
        ☀️
      </span>
      {/* 月アイコン */}
      <span
        className={`absolute right-2 text-xl transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
        role="img"
        aria-label="Dark mode"
      >
        🌙
      </span>
      {/* スイッチ部分 */}
      <span
        className={`absolute top-1 left-1 w-7 h-7 rounded-full shadow-xl transition-all duration-300 transform bg-white ${
          isDarkMode ? 'translate-x-7' : 'translate-x-0'
        } border border-gray-200 flex items-center justify-center`}
        style={{
          boxShadow: '0 4px 12px 0 rgba(0,0,0,0.18), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
          background: isDarkMode
            ? 'linear-gradient(135deg, #232526 0%, #414345 100%)'
            : 'linear-gradient(135deg, #fffbe6 0%, #fff 100%)',
        }}
      ></span>
    </button>
  );
}; 