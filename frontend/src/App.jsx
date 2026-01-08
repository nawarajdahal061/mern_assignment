import { useState } from 'react'
import Navbar from './collection/navbar/navbar'
import Hero from './collection/herosection/Hero'
import Footer from './collection/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './collection/home/Home'
import Signup from './collection/pages/Signup'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Signup" element={<Signup />}/>
        {/* <Route path="/" element={<home />}/> */}
      </Routes>

    </div>
  )
}

export default App
