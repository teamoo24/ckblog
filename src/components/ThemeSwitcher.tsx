'use client'

import { Button } from '@mui/material'
import { useState } from 'react'

const ThemeSwitcher = () => {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    // 初期テーマをlocalStorageから取得
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    document.documentElement.classList.toggle('dark', mode === 'light')
  }

  return (
    <div className="p-4 bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <h1 className="text-2xl">MUIとTailwindでのダークモード実装例</h1>
      <Button onClick={toggleTheme} variant="contained" className="mt-4">
        {mode === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
      </Button>
      {/* 他のコンテンツ */}
    </div>
  )
}

export default ThemeSwitcher
