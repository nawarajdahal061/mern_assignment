import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'

const Login = () => {

  const [email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    console.log("Form submitted")
  }

  const onChangeEmail = (event) => {
    console.log("Email changed", event.target.value)
    let email = event.target.value;
    setemail(email)
  }

   const onChangePassword = (event) => {
    console.log("Password changed", event.target.value)
    let email = event.target.value;
    setPassword(email)
  }

  const handleOnBlurEmail = () => {
    console.log("completed editing")
    if (email.length < 5) {
      setError("must be greater than five character")
      setemail("")
    }
  }

  const handleOnBlurPassword = () => {
    if (Password.length < 5) {
      setError("must be greater than five character")
    }

  }

useEffect(() => {
  if (email.length > 5) {
    setError("")
  }
  if (Password.length > 5) setError("")
}, [email, Password])

  return (
    <div>
        <Navbar/>
    
    <div style={{display:"flex",flexDirection:'column', backgroundColor:'white',padding:80}}>
      <h2 style={{backgroundColor:'darkblue',  textAlign:'center',justifyContent:'space-around',}}>Login form </h2>
      <div style={{backgroundColor:"black",display:"flex",justifyContent:"space-between"}}>
<div style={{backgroundColor:"skyblue",width:600}}>
        <p></p>

      </div>
       <div style={{ display:"flex", flexDirection:'column', justifyContent:"space-between", backgroundColor:"white",margin:8,height:200,}}>
        <h4>Create an account</h4>

      <form style={{display:"flex", flexDirection:"column", justifyContent:"space-between",margin:8,}}>
        
        <input type="email"
          placeholder="Email"
          onChange={onChangeEmail}
          onBlur={handleOnBlurEmail}
          value={email}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }}/>
        <input 
         type="Password"
         placeholder='Password'
          onChange={onChangePassword}
          onBlur={handleOnBlurPassword}
          value={Password}
          style={{ padding: 10, margin: 10, fontSize: 16, borderRadius: 5, minWidth: 300 }}
        />
        
      </form>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login
