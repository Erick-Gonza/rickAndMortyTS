import create from 'zustand'

interface ThemeStore {
  theme: string
  setTheme: (theme: string) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: JSON.parse(localStorage.getItem('theme') || '{}'),
  setTheme: (theme: string) => set((state) => ({ theme })),
}))
