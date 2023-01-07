import Header from '../components/Navigation/Header'
import Footer from '../components/Footer/Footer'
import ThemeButton from '../components/ThemeButton/ThemeButton'
import CharacterList from '../components/Characters/CharacterList'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-3 py-4 text-center">
        <CharacterList />
      </main>
      <ThemeButton />
      <Footer />
    </>
  )
}

export default Home
