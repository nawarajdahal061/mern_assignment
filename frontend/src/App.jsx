import { useState } from 'react'
import Navbar from './collection/navbar/navbar'
import Hero from './collection/herosection/Hero'
import Footer from './collection/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './collection/pages/Home'


import Bike from './collection/pages/Bike'
import BikeDetails from './collection/pages/BikeDetails'
import Auth from './collection/pages/Auth'
import Login from './collection/pages/Login'
import SignUp from './collection/pages/SignUp'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      {/* <Navbar/> */}
  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>

        
        <Route path="bike">
        <Route path=":bikeId" element={<Bike />}/>
        <Route path="details" element={<BikeDetails />}/>
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/error" element={<h1>500 internal server error </h1>} />
        
      </Routes>

    </div>
  )
}

export default App
