import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Router from './Router/Router.jsx'
import Home from './Home/Home'
import Donation from './Components/Donation/Donation'
import Statistics from './Components/Statistics/Statistics'
import View from './Components/View/View'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Router></Router>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('Data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/view/:id',
        element:<View></View>,
        loader:()=>fetch('Data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
