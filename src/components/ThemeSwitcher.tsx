'use client'

import { Button, createTheme, CssBaseline, PaletteMode } from '@mui/material'
import { palette } from '@mui/system'
import { useMemo, useState } from 'react'
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProvider,
} from '@emotion/react'

const ThemeSwitcher = () => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const toggleTheme = () => {
    // 初期テーマをlocalStorageから取得
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    document.documentElement.classList.toggle('dark', mode === 'light')
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="p-4 bg-white dark:bg-black text-black dark:text-white min-h-screen">
          <h1 className="text-2xl">MUIとTailwindでのダークモード実装例</h1>
          <Button onClick={toggleTheme} variant="contained" className="mt-4">
            {mode === 'light'
              ? 'ダークモードに切り替え'
              : 'ライトモードに切り替え'}
          </Button>
          {/* 他のコンテンツ */}
        </div>
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

export default ThemeSwitcher
