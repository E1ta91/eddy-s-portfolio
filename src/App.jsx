import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Drone from './pages/drone';
import Recycling from './pages/recycling';
import Shredder from './pages/shredder';
import Ecar from './pages/ecar';
import Kart from './pages/kart';
import Amn from './pages/amn';
import InfantCarrier from './pages/infantCarrier';
import ElectricBike from './pages/electricBike';
import DeliveryBike from './pages/deliveryBike';
import V6Engine from './pages/v6Engine';
import ProjectsPage from './pages/projectsPage';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: 'projects', element: <ProjectsPage /> },
    { path: 'drone', element: <Drone /> },
    { path: 'recycling', element: <Recycling /> },
    { path: 'shredder', element: <Shredder /> },
    { path: 'ecar', element: <Ecar /> },
    { path: 'kart', element: <Kart /> },
    { path: 'amn', element: <Amn /> },
    { path: 'infant-carrier', element: <InfantCarrier /> },
    { path: 'electric-bike', element: <ElectricBike /> },
    { path: 'delivery-bike', element: <DeliveryBike /> },
    { path: 'v6-engine', element: <V6Engine /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
