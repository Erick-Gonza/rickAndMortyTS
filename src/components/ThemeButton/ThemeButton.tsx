import useTheme from '../../hooks/useTheme'
import { useThemeStore } from '../../store/themeStore'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const ThemeButton = () => {
  const theme = useTheme()
  const { setTheme } = useThemeStore()
  return (
    <button
      className="fixed bottom-4 right-4 rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center "
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  )
}

export default ThemeButton
