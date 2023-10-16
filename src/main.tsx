import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'

import CategoryPage from './pages/category/index.tsx'
import DetailsPage from './pages/details/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:id?' element={<DetailsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
