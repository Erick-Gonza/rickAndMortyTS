import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="w-full flex-col px-3 py-4">
      <section className="flex flex-col items-center">
        <a
          className="text-slate-900 dark:text-slate-300 text-base md:text-xl font-semibold flex justify-center items-center gap-1"
          href="https://www.linkedin.com/in/erick-gzz/"
          target={'_blank'}
        >
          <AiFillLinkedin />
          Erick Gzz
        </a>
        <a
          className="text-slate-900 dark:text-slate-300 text-base md:text-xl font-semibold flex justify-center items-center gap-1"
          href="https://github.com/Erick-Gonza/"
          target={'_blank'}
        >
          <AiFillGithub />
          ErickGonza
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
