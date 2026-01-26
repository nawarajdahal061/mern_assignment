import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ }}>
      <div style={{  backgroundColor: "white", position: "fixed",t0p:0, left:0, right:0, }}>
        <header style={{ display: "flex", justifyContent: "space-around" }}>

          <div style={{ backgroundColor: "", height:50, width:110,paddingTop:4}}>
            <a>
          <img src="/logofinal.png" style={{ height: "50px", width: "120px"}} ></img>
          
        </a>
        
          </div>
          <ul style={{ display: "flex",flexDirection: "row", listStyle: "none", gap: 10, cursor: 'pointer',paddingTop:18}}>
            <li><Link to={'/'} style={{textDecorationLine: "none", color: "black", }} href="#">🇭​​🇴​​🇲​​🇪</Link></li>
            <li><a style={{ color: "black"}}>🇫​​🇮​​🇳​​🇩​ ​🇩​​🇴​​🇨​​🇹​​🇴​​🇷​​🇸</a></li>
            <li><a style={{ color: "black"}}>🇦​​🇧​​🇴​​🇺​​🇹​ ​🇺​​🇸​</a></li>
            <li><a style={{ color: "black"}}>🇨​​🇴​​🇳​​🇹​​🇦​​🇨​​🇹​ ​🇺​​🇸​</a></li>



          </ul>

          <Link to={'/Login'}>
          <button  style={{ backgroundColor: "black",
             color: "white",
               borderRadius: "32px",
               padding:1,
                height: "25px",
                 margin: "17px",paddingLeft:0,
                 width:60 }}>Login​</button>
</Link>

   <Link to={'/SignUp'}>
          <button  style={{ backgroundColor: "indigo",
             color: "white",
               borderRadius: "32px",
               paddingLeft:1 ,
                height: "25px",
                 margin: "17px",
                 width:60 }}>SignUp​</button>
</Link>


        </header>

      </div>
    </div>
  )
}

export default Navbar
