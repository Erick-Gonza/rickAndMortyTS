import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="w-full flex-col px-3 py-4">
      <section className="flex flex-col gap-2 items-center">
        <section className="w-full">
          <a
            className="font-asap text-secondary text-base md:text-xl font-normal flex justify-center items-center gap-1"
            href="https://www.linkedin.com/in/erick-gzz/"
            target={'_blank'}
          >
            <AiFillLinkedin />
            Erick Gzz
          </a>
        </section>

        <section className="w-full">
          <a
            className="font-asap text-secondary text-base md:text-xl font-normal flex justify-center items-center gap-1"
            href="https://github.com/Erick-Gonza/"
            target={'_blank'}
          >
            <AiFillGithub />
            Erick Gonza
          </a>
        </section>

        <section className="w-full">
          <p className="font-asap text-center text-secondary text-base md:text-xl font-normal">
            © 2023 - All rights reserved
          </p>
        </section>
      </section>
    </footer>
  )
}

export default Footer
