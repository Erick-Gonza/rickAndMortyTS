import { useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { id } = useParams()
  return (
    <>
      <h2>CharacterDetail</h2>
    </>
  )
}

export default CharacterDetail
