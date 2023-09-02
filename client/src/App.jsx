import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DataProvider from './context/dataProvider'

// Pages
import Login from './pages/login'
import Home from './pages/home'

function App() {

  return (
    <div className='app'>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} exact />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  )
}

export default App
