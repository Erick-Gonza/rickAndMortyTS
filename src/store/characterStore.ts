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
  singleCharacter: Character
  page: number
  baseUrl: string
  setPage: (page: number) => void
  setBaseUrl: (id?: number) => void
  getCharacters: () => Promise<void>
  getSingleCharacter: () => Promise<void>
}

const replaceBaseUrl = (url: string, page?: number, id?: number): string => {
  let index: number = 0
  if (url.includes('?page') && id !== undefined) {
    index = url.indexOf('?page=')
    return url.slice(0, index) + `/${id}`
  } else if (url.includes('/api/character/') && id === undefined) {
    return url.replace(/\/api\/character\/\d+/, `/api/character?page=${page}`)
  } else {
    index = url.indexOf('?page')
    return url.slice(0, index) + `?page=${page}`
  }
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  results: [],
  singleCharacter: {} as Character,
  page: 1,
  baseUrl: 'https://rickandmortyapi.com/api/character?page=1',

  setPage: (page: number) => set((state) => ({ page })),

  setBaseUrl: (id?: number) => {
    const { page, baseUrl } = get()
    if (id) {
      const newBaseUrl = replaceBaseUrl(baseUrl, undefined, id)
      set((state) => ({ baseUrl: newBaseUrl }))
    } else {
      const newBaseUrl = replaceBaseUrl(baseUrl, page, undefined)
      set((state) => ({ baseUrl: newBaseUrl }))
    }
  },

  getSingleCharacter: async () => {
    const response = await (await fetch(get().baseUrl)).json()
    set((state) => ({ singleCharacter: response }))
  },

  getCharacters: async () => {
    const response = await (await fetch(get().baseUrl)).json()
    set((state) => ({
      results: response.results,
    }))
  },
}))
