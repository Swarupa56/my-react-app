import React from 'react'
import style from './Bike.module.css'
import { Link } from 'react-router-dom'

const Bike = ({id,name,image,hourly_rate,bike_number,availableBikes,totalBikes}) => {
  return (
    <div className={style.bike}>
      <Link to={`/bike/${id}`}>
      <img src={image} alt={name} width="200" height="100"/>
      </Link>
      <div style={{display:"flex",gap:"10px"}}>
      <h2>{name}</h2>
      <h2 style={{color:"yellowgreen"}}>{hourly_rate}</h2>
      </div>
      <h3>Bike Number:{id}</h3>
      <h3>Bikes Available:{availableBikes}/{totalBikes}</h3>
      <button disabled={availableBikes==0}>Book Now</button>
    </div>
  )
}

export default Bike