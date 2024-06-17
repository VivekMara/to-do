import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddTask from './AddTask.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import GetTask from './GetTask.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>Hello World</div>
    },
    {
      path:"addtask",
      element:<AddTask/>
    },
    {
      path:"gettask",
      element:<GetTask/>
    }
  ]
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
