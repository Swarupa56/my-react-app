import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bookings = () => {
  const [data,setData]=useState([])
  const [bikeData,setBikeData]=useState({})
  const [totalRevenue,setRevenue]=useState(0)
  const fetchBookings=()=>{
    axios.get("http://localhost:3000/bookings")
    .then(response=>{setData(response.data)
      data.map((item)=>{
        setRevenue(totalRevenue+item.totalAmount)
      })
    }
  )
    .catch(error=>console.log(error))
  }
  useEffect(()=>{
    fetchBookings()
  },[])
  const handleCompleted=(id,completed,bikeId)=>{
    const body={completed:!completed}
    axios.patch(`http://localhost:3000/bookings/${id}`,body)
    .then(result=>{
      axios.get(`http://localhost:3000/bikes/${bikeId}`)
      .then(result=>{
        const availability={availableBikes:result.data.availableBikes+1}
      axios.patch(`http://localhost:3000/bikes/${bikeId}`,availability)
      .then(result)
      })
      fetchBookings()})
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <h2>Total Revenue:{totalRevenue}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Bike Id</th>
            <th>Customer name</th>
            <th>Phone</th>
            <th>Pickup</th>
            <th>DropOff</th>
            <th>Total Amount</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element)=>(
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.bikeID}</td>
              <td>{element.name}</td>
              <td>{element.phone}</td>
              <td>{element.pickup}</td>
              <td>{element.dropoff}</td>
              <td>{element.totalAmount}</td>
              <td>{element.completed ? <button>Yes</button>:<button onClick={()=>handleCompleted(element.id,element.completed,element.bikeID)}>No</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Bookings