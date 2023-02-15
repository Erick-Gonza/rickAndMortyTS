import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="w-full flex-col justify-between px-3 py-4">
      <section className="flex flex-col md:flex-row gap-2">
        <section className="w-full flex justify-center">
          <p className="font-asap text-center text-secondary text-base md:text-xl font-normal">
            © 2023 - All rights reserved
          </p>
        </section>
        <section className="w-full flex gap-6 justify-center">
          <a
            className="font-asap text-secondary text-base md:text-xl font-normal flex justify-center items-center gap-1"
            href="https://www.linkedin.com/in/erick-gzz/"
            target={'_blank'}
          >
            <AiFillLinkedin />
            Erick Gzz
          </a>
          <a
            className="font-asap text-secondary text-base md:text-xl font-normal flex justify-center items-center gap-1"
            href="https://github.com/Erick-Gonza/"
            target={'_blank'}
          >
            <AiFillGithub />
            Erick Gonza
          </a>
        </section>
      </section>
    </footer>
  )
}

export default Footer
