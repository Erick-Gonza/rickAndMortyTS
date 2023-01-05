import axios from 'axios'
import { useEffect, useState } from 'react'
import { AllCharacters } from '../Interfaces'

interface Loader {
  loading: boolean
}

const useFetch = () => {
  const [data, setData] = useState<AllCharacters>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const url: string = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

export default useFetch
