import React from 'react'

const Signup = () => {
  return (
    <div style={{display:"flex",flexDirection:'column', backgroundColor:'white',padding:80}}>
      <h2 style={{backgroundColor:'darkblue',  textAlign:'center',justifyContent:'space-around',}}>Sign up form </h2>
      <div style={{backgroundColor:"black",display:"flex",justifyContent:"space-between"}}>
<div style={{backgroundColor:"skyblue",width:600}}>
        <p></p>

      </div>
       <div style={{ display:"flex", flexDirection:'column', justifyContent:"space-between", backgroundColor:"white",margin:8,height:100,}}>
        <h4>Create an account</h4>
      <form style={{display:"flex", flexDirection:"column", justifyContent:"space-between",margin:8,}}>
        <input placeholder='Full Name'/>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        
      </form>
      </div>
      </div>
    </div>
  )
}

export default Signup
