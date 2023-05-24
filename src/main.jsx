import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-screen-xl mx-auto '>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={Routes}>

        </RouterProvider>
      </React.StrictMode>,
    </AuthProvider>


  </div>
)
