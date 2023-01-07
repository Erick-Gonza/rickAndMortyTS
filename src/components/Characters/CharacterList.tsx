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
          <section className="bg-indigo-600 px-2 py-3 rounded mb-4">
            <h2 className="font-bold text-xl">{character.name}</h2>
            <img
              src={character.image}
              alt={character.name}
              className="w-fit rounded px-2 py-3"
            />
            <section className="flex items-center">
              <section className="w-1/2">
                <p className="font-medium text-md">{character.status}</p>
                <p className="font-medium text-md">{character.gender}</p>
              </section>
              <section className="w-1/2">
                <p className="font-medium text-md">{character.location.name}</p>
                <p className="font-medium text-md">{character.origin.name}</p>
              </section>
            </section>
          </section>
        )
      })}
    </>
  )
}

export default CharacterList
