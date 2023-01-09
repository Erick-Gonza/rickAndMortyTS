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
      <main className="w-full flex-1 px-3 py-4 grid grid-cols-2 gap-4">
        <section
          className="flex items-center justify-center rounded-xl bg-secondary relative"
          key={singleCharacter.id}
        >
          <img
            src={singleCharacter.image}
            alt={singleCharacter.name}
            className="rounded-xl border-secondary border-2"
          />
          <h2 className="text-secondary text-sm">{singleCharacter.name}</h2>
        </section>
      </main>
      <ThemeButton />
      <Footer />
    </>
  )
}

export default CharacterDetail
