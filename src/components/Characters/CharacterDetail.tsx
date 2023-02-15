import { useParams } from 'react-router-dom'
import shallow from 'zustand/shallow'
import { useCharacterStore } from '../../store/characterStore'
import { useEffect } from 'react'
import Header from '../Navigation/Header'
import Footer from '../Footer/Footer'
import ThemeButton from '../ThemeButton/ThemeButton'

const CharacterDetail = () => {
  const { id } = useParams()

  const { singleCharacter, baseUrl } = useCharacterStore(
    (state) => ({
      singleCharacter: state.singleCharacter,
      baseUrl: state.baseUrl,
    }),
    shallow
  )
  const { getSingleCharacter, setBaseUrl } = useCharacterStore()

  useEffect(() => {
    setBaseUrl(Number(id))
    getSingleCharacter()
  }, [])

  return (
    <>
      <Header />
      <main className="flex items-center justify-center w-full h-full flex-1 px-3 py-4">
        <section className="flex flex-col md:flex-row md:w-auto md:h-3/4 rounded overflow-hidden shadow-lg border-2 border-secondary px-4 py-3">
          <img
            className="w-fit rounded-md mb-4"
            src={singleCharacter.image}
            alt={singleCharacter.name}
          />

          <section className="px-4 py-3">
            <section className="flex flex-col justify-center">
              <h2 className="font-bold text-xl mb-2 text-secondary">
                {singleCharacter.name}
              </h2>
              <p className="text-base text-secondary">
                {singleCharacter.location?.name}
              </p>
            </section>
            <section className="flex flex-col justify-center ">
              <span
                className={`inline-block rounded-full px-2 py-1 text-sm font-semibold text-primary mr-2 mb-2 ${
                  singleCharacter.status === 'Alive'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              >
                {singleCharacter.status}
              </span>
              <span className="inline-block bg-secondary rounded-full px-2 py-1 text-sm font-semibold text-primary mr-2 mb-2">
                {singleCharacter.species}
              </span>
              <span className="inline-block bg-secondary rounded-full px-2 py-1 text-sm font-semibold text-primary mr-2 mb-2">
                {singleCharacter.origin?.name}
              </span>
            </section>
          </section>
        </section>
      </main>
      <ThemeButton />
      <Footer />
    </>
  )
}

export default CharacterDetail
