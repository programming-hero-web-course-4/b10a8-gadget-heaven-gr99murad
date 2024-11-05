import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Components/MainLayouts/MainLayouts.jsx';
import Statistics from './Pages/Statistics.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayouts></MainLayouts>,
    children:
    [
      {
        path:"/",
        element: <Home></Home>,
 
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
