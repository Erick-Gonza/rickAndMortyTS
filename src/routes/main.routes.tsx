import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import CharacterDetail from '../components/Characters/CharacterDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/character/:id',
        element: <CharacterDetail />,
      },
    ],
  },
])

export default router
