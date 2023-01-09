import { useCharacterStore } from '../../store/characterStore'
import shallow from 'zustand/shallow'
import { useEffect } from 'react'

const CharacterList = () => {
  const { results, baseUrl } = useCharacterStore(
    (state) => ({
      results: state.results,
      baseUrl: state.baseUrl,
    }),
    shallow
  )
  const { getCharacters, setBaseUrl } = useCharacterStore()

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
      {results.map((character) => {
        return (
          <section className="flex items-center justify-center rounded-xl bg-secondary relative">
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
          </section>
        )
      })}
    </>
  )
}

export default CharacterList
