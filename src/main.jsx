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
import ErrorPage from './Components/Errorpage.jsx';
import CardSection from './Components/CardSection.jsx';
import AllProducts from './Components/AllProducts.jsx';




const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
    [
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('../Categories.json'),
        children:
        [
          {
            path:"/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch('../gadgets.json'),

          },
          {
            path:"/category/:category",
            element: <CardSection></CardSection>,
            loader: () => fetch('../gadgets.json'),
          },
          
        ]
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
