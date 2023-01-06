import useTheme from '../../hooks/useTheme'
import { useThemeStore } from '../../store/themeStore'

const ThemeButton = () => {
  const theme = useTheme()
  const { setTheme } = useThemeStore()
  return (
    <button
      className="absolute bottom-4 right-4 rounded-full w-10 h-10 bg-gray-200"
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      Mode
    </button>
  )
}

export default ThemeButton
