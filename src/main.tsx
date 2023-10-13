import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import CategoryPage from './pages/category/index.tsx'

import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:category' element={<CategoryPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
