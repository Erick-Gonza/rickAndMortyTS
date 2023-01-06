import ThemeButton from '../ThemeButton/ThemeButton'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="flex flex-col items-center px-3 py-4">
      <section>
        <h2 className="text-4xl md:text-6xl font-semibold dark:text-slate-300">
          Rick and Morty
        </h2>
      </section>
      <Navbar />
      <ThemeButton />
    </header>
  )
}

export default Header
