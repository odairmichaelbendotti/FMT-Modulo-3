import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import Home from './pages/Home'

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default router
