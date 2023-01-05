import useFetch from './hooks/useFetch'
import { Character } from './Interfaces'

function App() {
  const { data } = useFetch()
  return data?.results.map((character: Character) => (
    <div key={character.id}>
      <h1>{character.name}</h1>
      <img src={character?.image} />
    </div>
  ))
}

export default App
