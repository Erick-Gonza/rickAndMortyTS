import { useThemeStore } from './store/themeStore'
import useTheme from './hooks/useTheme'

function App() {
  const theme = useTheme()
  const { setTheme } = useThemeStore()
  return (
    <>
      <div>
        <h2>Hello world</h2>
        <p>Theme: {theme}</p>
        <button
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
        >
          Change Theme
        </button>
      </div>
    </>
  )
}

export default App
