import { useEffect, useState } from 'react'
import { useThemeStore } from '../store/themeStore'
import shallow from 'zustand/shallow'

const useTheme = () => {
  const { theme } = useThemeStore(
    (state) => ({
      theme: state.theme,
    }),
    shallow
  )
  const { setTheme } = useThemeStore()

  useEffect(() => {
    theme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark')
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return theme
}

export default useTheme
