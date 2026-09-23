import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Drone from './pages/drone'
import Recycling from './pages/recycling'
import Shredder from './pages/shredder'
import Ecar from './pages/ecar'
import Kart from './pages/kart'
import Amn from './pages/amn'

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "drone",
      element: <Drone/>
    },
    
    {
      path: "recycling",
      element: <Recycling/>
    },

    {
      path: "shredder",
      element: <Shredder/>
    },
    {
      path: "ecar",
      element: <Ecar/>
    },
    {
      path: "kart",
      element: <Kart/>
    },
    {
      path: "amn",
      element: <Amn/>
    },
  ])

  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
