'use client'

import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // 初期テーマをlocalStorageから取得
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.add(savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer flex items-center transition-colors duration-300`}
    >
      <div
        className={`absolute w-7 h-7 bg-white dark:bg-gray-200 rounded-full transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}`}
      />
      <span className="absolute left-1 text-gray-600 dark:text-gray-300">🌞</span>
      <span className="absolute right-1 text-gray-600 dark:text-gray-300">🌙</span>
    </div>
  )
}

export default ThemeSwitcher
