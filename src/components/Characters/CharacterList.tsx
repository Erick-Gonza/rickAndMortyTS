import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCharacterStore } from '../../store/characterStore'
import shallow from 'zustand/shallow'

const CharacterList = () => {
  const { results, baseUrl } = useCharacterStore(
    (state) => ({
      results: state.results,
      baseUrl: state.baseUrl,
    }),
    shallow
  )
  const { getCharacters, setBaseUrl, setPage } = useCharacterStore()

  useEffect(() => {
    setPage(1)
  }, [])

  useEffect(() => {
    setBaseUrl()
    getCharacters()
  }, [baseUrl])

  return (
    <>
      {results?.map((character) => {
        return (
          <section
            className="flex items-center justify-center rounded-xl bg-secondary relative"
            key={character.id}
          >
            <Link to={`/character/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                className="rounded-xl border-secondary border-2"
              />
              <section className="absolute bottom-[2%] right-[3%] bg-primary p-1 rounded">
                <h2 className="text-secondary text-sm">
                  {character.name.substring(0, 12)}
                </h2>
              </section>
            </Link>
          </section>
        )
      })}
    </>
  )
}

export default CharacterList
