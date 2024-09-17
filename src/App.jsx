import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import RootLayout from './constants/layout/rootLayout'

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },
    
  ])

  return (
    <div >
        <RouterProvider router={router}/>
    </div>
  
  )
}

export default App
