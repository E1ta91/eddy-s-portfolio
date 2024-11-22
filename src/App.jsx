import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Drone from './pages/drone'

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
    
  ])

  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
