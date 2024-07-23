'use client'

import { Button } from '@mui/material'
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
    <>
      <Button onClick={toggleTheme} variant="contained" className="mt-4">
        {theme === 'light'
          ? 'ダークモードに切り替え'
          : 'ライトモードに切り替え'}
      </Button>
    </>
  )
}

export default ThemeSwitcher
