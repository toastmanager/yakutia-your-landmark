import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import Navbar from './layouts/Navbar.tsx'
import Test from './pages/Test.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Test />
  </React.StrictMode>,
)
