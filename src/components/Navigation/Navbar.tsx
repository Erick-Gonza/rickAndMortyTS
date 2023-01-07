const Navbar = () => {
  return (
    <nav className="flex mt-6 justify-around w-full container">
      <section>
        <button className="rounded bg-slate-900 text-slate-300 dark:bg-slate-300 dark:text-slate-900 px-4 py-2 text-xs md:text-sm font-semibold">
          Prev
        </button>
      </section>
      <section className="flex justify-center w-full">
        <label htmlFor="characterName"></label>
        <input
          type="text"
          id="characterName"
          placeholder="Character Name"
          className="block font-semibold text-center w-3/4 md:w-1/3 px-4 py-2  text-xs md:text-sm text-slate-300 border border-gray-300 rounded-lg bg-slate-900 dark:text-slate-900 dark:border-gray-600 dark:bg-slate-300 dark:placeholder-gray-400"
        />
      </section>
      <section>
        <button className="rounded bg-slate-900 text-slate-300 dark:bg-slate-300 dark:text-slate-900 px-4 py-2 text-xs md:text-sm font-semibold">
          Next
        </button>
      </section>
    </nav>
  )
}

export default Navbar
