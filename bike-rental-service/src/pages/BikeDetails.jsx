import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './BikeDetails.module.css'

const BikeDetails = () => {
  const params=useParams()
  const [data,setData]=useState({})
  const nameRef=useRef("")
  const phoneRef=useRef("")
  const pickRef=useRef("")
  const dropRef=useRef("")
  const fetchBikeDetails=(params)=>{
     axios.get(`http://localhost:3000/bikes/${params.id}`)
     .then(response=>{setData(response.data)})
     .catch(error=>console.log(error))
  }
  useEffect(()=>{
    fetchBikeDetails(params)
  },[params.id])
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(pickRef.current.value===dropRef.current.value){
      alert("Pickup date and drop-off date are equal")
    }
    if(pickRef.current.value>=dropRef.current.value){
      alert("Pickup date is later than drop-off date")
    }
  }
 const postData=()=>{
  const pickupdate=new Date(pickRef.current.value)
  const dropDate=new Date(dropRef.current.value)
  const totalAmount=((dropDate.getDate()-pickupdate.getDate())*24)*Number(data.hourly_rate)
  const bikeData={
    name:              nameRef.current.value,
    phone:             phoneRef.current.value,
    pickup:            pickRef.current.value,
    dropoff:           dropRef.current.value,
    completed:         false,
    bikeID:            data.id,
    totalAmount: totalAmount
 }
   axios.post("http://localhost:3000/bookings",bikeData)
   .then(result=>console.log(result.data))
   .catch(error=>console.log(error))
 }
  return (
    <div className={style.bikeDetails}>
    <div>
      <img src={data.image} alt={data.name} width="200" height="100"/>
      <div style={{display:"flex",gap:"10px"}}>
      <h2>{data.name}</h2>
      <h2 style={{color:"yellowgreen"}}>{data.hourly_rate}</h2>
      </div>
      <h3>Bike Number:{data.id}</h3>
      <h3>Bikes Available:{data.availableBikes}/{data.totalBikes}</h3>
    </div>
    <form className={style.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" placeholder='Name' ref={nameRef}/><br/>
       <label>Phone</label>
       <input type="text" placeholder='Phone' ref={phoneRef}/><br/>
       <label>Pick Up:</label>
       <input type="date" ref={pickRef}/><br/>
       <label>Drop Off:</label>
       <input type="date" ref={dropRef}/><br/>
       <button type="submit" onClick={postData}>Book Now</button>
    </form>
    </div>
  )
}

export default BikeDetails