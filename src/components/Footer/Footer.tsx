const Footer = () => {
  return (
    <footer className="w-full flex-col px-2 py-3">
      <section className="flex flex-col items-center">
        <a className="text-slate-900 dark:text-slate-300 text-base md:text-xl font-semibold">
          LinkedIn
        </a>
        <a className="text-slate-900 dark:text-slate-300 text-base md:text-xl font-semibold">
          Github
        </a>
      </section>

      <section className="mt-2">
        <p className="text-center text-slate-900 dark:text-slate-300 text-base md:text-xl font-semibold">
          © 2023 - All rights reserved
        </p>
      </section>
    </footer>
  )
}

export default Footer
