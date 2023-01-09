import Header from '../components/Navigation/Header'
import Footer from '../components/Footer/Footer'
import ThemeButton from '../components/ThemeButton/ThemeButton'
import CharacterList from '../components/Characters/CharacterList'

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-full flex-1 px-3 py-4 grid grid-cols-2 gap-4">
        <CharacterList />
      </main>
      <ThemeButton />
      <Footer />
    </>
  )
}

export default Home
