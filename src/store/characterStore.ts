import create from 'zustand'

interface Origin {
  name: string
  url: string
}

interface Location {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: Origin
  location: Location
  image: string
}

export interface CharacterStore {
  results: Character[]
  page: number
  baseUrl: string
  setPage: (page: number) => void
  setBaseUrl: () => void
  getCharacters: () => Promise<void>
}

const replaceBaseUrl = (url: string, page: number): string => {
  let index = url.lastIndexOf('page=')
  return url.slice(0, index).concat(`page=${page}`)
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  results: [],
  page: 1,
  baseUrl: 'https://rickandmortyapi.com/api/character?page=1',

  setPage: (page: number) => set((state) => ({ page })),

  setBaseUrl: () =>
    set((state) => ({
      baseUrl: replaceBaseUrl(get().baseUrl, get().page),
    })),

  getCharacters: async () => {
    const response = await (await fetch(get().baseUrl)).json()
    set((state) => ({
      results: response.results,
    }))
  },
}))
