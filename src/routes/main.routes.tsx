import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'

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
        path: '/character',
        element: 'Characters',
      },
      {
        path: '/character/:id',
        element: 'CharactersDetail',
      },
      {
        path: '/fav',
        element: <Favorites />,
      },
      {
        path: '/fav/:id',
        element: 'FavoritesDetail',
      },
    ],
  },
])

export default router
