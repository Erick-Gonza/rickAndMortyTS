export interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface ThemeSession {
  handleClick: () => void
  theme: string
}
