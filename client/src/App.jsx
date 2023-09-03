import React from 'react'

import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import DataProvider from './context/dataProvider'

// Pages
import Login from './pages/login'
import Home from './pages/home'
import CreatePosts from './pages/createPosts';

//Components
import Header from './components/header';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </> :
    <Navigate replace to='/login' />
}

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <div className='app'>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/" element={<Home />} exact />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/create" element={<CreatePosts />} exact />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  )
}

export default App
