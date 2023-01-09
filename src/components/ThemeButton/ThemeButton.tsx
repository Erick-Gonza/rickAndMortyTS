import { useThemeStore } from '../../store/themeStore'
import useTheme from '../../hooks/useTheme'

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const ThemeButton = () => {
  const theme = useTheme()
  const { setTheme } = useThemeStore()
  return (
    <button
      className="fixed top-4 right-2 rounded-full w-8 h-8 bg-secondary flex items-center justify-center "
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      {theme === 'light' ? (
        <BsFillMoonStarsFill size={18} />
      ) : (
        <BsFillSunFill size={20} />
      )}
    </button>
  )
}

export default ThemeButton
