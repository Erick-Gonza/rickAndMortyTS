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
  baseUrl: string
  setBaseUrl: (url: string, page: number) => void
  getCharacters: () => Promise<void>
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  results: [],
  baseUrl: 'https://rickandmortyapi.com/api/character?page=1',
  setBaseUrl: (url: string, page: number) =>
    set((state) => ({ baseUrl: `${url}?page${page}` })),

  getCharacters: async () => {
    const response = await (await fetch(get().baseUrl)).json()
    set((state) => ({
      results: response.results,
    }))
  },
}))
