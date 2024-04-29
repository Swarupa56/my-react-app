import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import BikeDetails from '../pages/BikeDetails'
import Bookings from '../pages/Bookings'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bike/:id" element={<BikeDetails/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
    </Routes>
  )
}

export default AllRoutes