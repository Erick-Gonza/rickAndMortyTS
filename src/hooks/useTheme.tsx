import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'
import shallow from 'zustand/shallow'

const useTheme = () => {
  const themeLocalSource = JSON.parse(localStorage.getItem('theme') || '{}')

  const { theme } = useThemeStore(
    (state) => ({
      theme: state.theme,
    }),
    shallow
  )

  useEffect(() => {
    if (!themeLocalSource.theme) {
      localStorage.setItem('theme', JSON.stringify({ theme: 'light' }))
    } else {
      localStorage.setItem('theme', JSON.stringify({ theme }))
    }
  }, [theme])
  return theme
}

export default useTheme
