import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="flex mt-4 items-center justify-around w-full container">
      <section>
        <button className="rounded bg-secondary text-primary px-4 py-2 text-xs md:text-sm font-asap font-bold hover:opacity-80 active:scale-110 transition-shadow">
          Prev
        </button>
      </section>

      <section className="flex justify-center items-center  w-2/4 md:w-1/4 relative">
        <input
          type="text"
          id="characterName"
          placeholder="Character Name"
          className="w-full font-asap font-bold text-center px-4 py-2  text-xs md:text-sm text-primary border border-secondary rounded bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
        <AiOutlineSearch className="absolute right-2" size={20} />
      </section>

      <section>
        <button className="rounded bg-secondary text-primary px-4 py-2 text-xs md:text-sm font-asap font-bold hover:opacity-80 active:scale-110 transition-shadow">
          Next
        </button>
      </section>
    </nav>
  )
}

export default Navbar
