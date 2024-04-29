import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
