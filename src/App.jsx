import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
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
import EcoStove from './pages/ecoStove';
import PixelCase from './pages/pixelCase';
import ProjectsPage from './pages/projectsPage';
import ScrollToTop from './components/ScrollToTop';

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
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
        { path: 'eco-stove', element: <EcoStove /> },
        { path: 'pixel-case', element: <PixelCase /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
