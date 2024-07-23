'use client'

import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    // 初期テーマをlocalStorageから取得
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setMode(savedTheme)
      document.documentElement.classList.add(savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    // 初期テーマをlocalStorageから取得
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    document.documentElement.classList.toggle('dark', mode === 'light')
    localStorage.setItem('theme', mode)
  }

  return (
    <>
      <Button onClick={toggleTheme} variant="contained" className="mt-4">
        {mode === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
      </Button>
    </>
  )
}

export default ThemeSwitcher
