import React from 'react'

const Footer = () => {
  return (
    <div>
      <div style={{ marginTop: 10, backgroundColor: "black", height:400,display: "flex" }}>
        <h4 style={{color:"white",paddingTop:30, paddingLeft:60 }}>contact us!</h4>
        
        <div style={{display: "flex", flexDirection:"column",paddingTop:30, paddingLeft:60, paddingRight:20, backgroundColor: "black",}}>
        <h2 style={{color:'green'}}>Contact us form</h2>
        <div style={{ display:"flex", justifyContent:"space-between",backgroundColor:"black",margin:8,height:150}}>
      <form style={{display:"flex", flexDirection:"column", justifyContent:"space-between", }}>
        <input placeholder='email'/>
        <input placeholder='details'/>
        <input placeholder='message'/>
        <button>Contact us</button>
      </form>
      </div>

      </div>
      
        
      </div>
    </div>
  )
}

export default Footer
