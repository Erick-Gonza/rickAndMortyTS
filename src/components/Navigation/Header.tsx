import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="flex flex-col items-center px-3 py-4 relative">
      <section>
        <h2 className="text-4xl md:text-6xl font-semibold dark:text-slate-300">
          Rick and Morty
        </h2>
        <img
          className="absolute top-2 left-[50%] -translate-x-1/2 w-1/6 md:w-1/12 h-auto opacity-30 dark:opacity-0"
          src="https://i.postimg.cc/7Z200vFh/rick-and-morty.png"
        />
      </section>
      <Navbar />
    </header>
  )
}

export default Header
