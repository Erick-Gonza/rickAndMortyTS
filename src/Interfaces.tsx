export interface Character {
  id: number | undefined
  name: string | undefined
  status: string | undefined
  species: string | undefined
  gender: string | undefined
  origin: Origin
  location: Location
  image: string | undefined
}

interface Origin {
  name: string | undefined
  url: string | undefined
}

interface Location {
  name: string | undefined
  url: string | undefined
}

export interface AllCharacters {
  info: Info
  results: Character[]
}

interface Info {
  count: number | undefined
  pages: number | undefined
  next: string | undefined
  prev: string | undefined
}

export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface ThemeSession {
  handleClick: () => void
  theme: string
}
