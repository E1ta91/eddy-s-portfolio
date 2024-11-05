import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import RootLayout from './constants/layout/rootLayout'
import Cutter from './pages/cutter'
import Printer from './pages/printer'
import Garden from './pages/garden'
import Drone from './pages/drone'

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "cutter",
      element: <Cutter/>
    },

    {
      path: "printer",
      element: <Printer/>
    },
    {
      path: "garden",
      element: <Garden/>
    },
    {
      path: "drone",
      element: <Drone/>
    },
    
  ])

  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
