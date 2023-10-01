import React, { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './screen/Home'
import Details from './screen/Details'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Credentials from './screen/Credentials'


//CREATE ROUTES
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route
        index
        element={<Home />}
      />
      <Route path='details/:id' element={<Details />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='credentials' element={<Credentials />} />
    </Route>
  )
)
const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App