const Navbar = () => {
  return (
    <nav className="flex mt-6 justify-around w-full container">
      <section>
        <button className="rounded-xl bg-slate-900 text-slate-300 dark:bg-slate-300 dark:text-slate-900 px-2 py-1 text-xs md:text-sm font-semibold md:px-3 md:py-2">
          Prev
        </button>
      </section>
      <section className="flex justify-center w-full">
        <label htmlFor="characterName"></label>
        <input
          type="text"
          id="characterName"
          placeholder="Rick Sanchez"
          className="block font-semibold text-center w-3/4 md:w-1/3 p-1 md:px-1 md:py-2 text-xs md:text-sm text-slate-300 border border-gray-300 rounded-lg bg-slate-900 dark:text-slate-900 dark:border-gray-600 dark:bg-slate-300 dark:placeholder-gray-400"
        />
      </section>
      <section>
        <button className="rounded-xl bg-slate-900 text-slate-300 dark:bg-slate-300 dark:text-slate-900 px-2 py-1 text-xs md:text-sm font-semibold md:px-3 md:py-2">
          Next
        </button>
      </section>
    </nav>
  )
}

export default Navbar