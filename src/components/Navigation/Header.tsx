import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="flex flex-col items-center px-3 py-4 relative">
      <section className="w-full">
        <Link to={'/'} className="w-full flex justify-center">
          <img
            src="https://i.postimg.cc/Z5vnVsHf/logo.png"
            className="w-3/4 md:w-1/3"
          />
        </Link>
      </section>
      <Navbar />
    </header>
  )
}

export default Header
