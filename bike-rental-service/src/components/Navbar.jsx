import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.bikeRental}>
      <Link to="/">Bike Rental</Link>
      <h3 style={{color:'yellowgreen'}}>Bike Rental Admin Dashboard</h3>
      <Link to="/bookings">All Bookings</Link>
    </nav>
  )
}

export default Navbar