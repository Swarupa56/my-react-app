import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import Bike from '../components/Bike'
import style from './Home.module.css'

const Home = () => {
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  const fetchBikeData=()=>{
    setLoading(true)
    axios.get("http://localhost:3000/bikes")
    .then(result=>{
      setData(result.data)
      setLoading(false)
    }
    )
    .catch(error=>{
      setLoading(true)
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchBikeData()
  },[])
  return (
    <div>
     {loading?<Loading/>:
     <div className={style.bikes_container}>
     {data.map((element)=>(
      <Bike key={element.id} {...element}/>
     ))}
     </div>
    }
    </div>
  )
}

export default Home