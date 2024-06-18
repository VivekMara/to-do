import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import AddTask from './AddTask.jsx'
import GetTask from './GetTask.jsx'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/gettasks",
      element:<GetTask/>
    },
    {
      path:"/addtask",
      element:<AddTask/>
    }
    
  ]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
