import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ marginTop: 12, backgroundColor: "white", position: "sticky", top: "0",  }}>
        <header style={{ display: "flex", justifyContent: "space-around" }}>

          <div style={{ backgroundColor: "black", height:50, width:110}}>
            <a>
          <img src="/logofinal.png" style={{ height: "50px", width: "120px"}} ></img>
          
        </a>
        
          </div>
          <ul style={{ display: "flex",flexDirection: "row", listStyle: "none", gap: 10, cursor: 'pointer' }}>
            <li><a style={{textDecorationLine: "none", color: "black", }} href="#">🇭​​🇴​​🇲​​🇪</a></li>
            <li><a style={{ color: "black"}}>🇫​​🇮​​🇳​​🇩​ ​🇩​​🇴​​🇨​​🇹​​🇴​​🇷​​🇸</a></li>
            <li><a style={{ color: "black"}}>🇦​​🇧​​🇴​​🇺​​🇹​ ​🇺​​🇸​</a></li>
            <li><a style={{ color: "black"}}>🇨​​🇴​​🇳​​🇹​​🇦​​🇨​​🇹​ ​🇺​​🇸​</a></li>



          </ul>
          <button  style={{ backgroundColor: "black", color: "white",  borderRadius: "32px",padding:1 , height: "25px", margin: "17px",width:60 }}>​🇸​​🇮​​🇬​​🇳​ ​🇺​​🇵​</button>



        </header>

      </div>

      <div style={{display: "flex",
        flexDirection: "row",
        backgroundColor:"",}}>


      <div 
      style={{ marginTop: 20, 
        }}>
        <a >
          <img style={{ 
        paddingLeft:10}} src="/img1.png"></img>
        </a>
        </div>


      <div style={{marginTop: 20,
        backgroundColor: "",
        textAlign: "center",
        paddingTop:60

      }}>
      
          <h1 style={{}}>𝗠𝗮𝗸𝗲 𝗮𝗻 𝗔𝗽𝗽𝗼𝗶𝗻𝘁𝗺𝗲𝗻𝘁
            𝖿𝗋𝗈𝗆 𝗒𝗈𝗎𝗋 𝗉𝗁𝗈𝗇𝖾!
          </h1>
          <h2></h2>
          <button  style={{ backgroundColor: "grey", color: "white",  borderRadius: "27px",padding: "6px", height: "30px", margin: "8px", }}>𝖡𝗈𝗈𝗄 𝖠𝗉𝗉𝗈𝗂𝗇𝗍𝗆𝖾𝗇𝗍 𝖧𝖾𝗋𝖾 → </button>
          
        </div>
      
      <div 
      style={{
        }}>
        <a >
          <img style={{padding:20, width:400 }} src="/imAG.png"></img>
        </a>
        </div>
        </div>
        
        

      <div style={{ marginTop: 10, backgroundColor: "purple", height:200,textAlign:"center",padding:60 }}>
        <h2 style={{color:"black", textAlign:'center',}}>Upcomming Appointments</h2>
        
        <button  style={{ backgroundColor: "grey", color: "white",  borderRadius: "27px",  }}>View All Appointments → </button>
        
      </div>
                             
      <div style={{ marginTop: 10, backgroundColor: "blue", height:200,textAlign:"center",padding:60 }}>
        <h2 style={{color:"black", textAlign:'center',}}>Book Appointment at Hospitals</h2>
        
        <button  style={{ backgroundColor: "grey", color: "white",  borderRadius: "27px",  }}>View All Hospitals → </button>
        
      </div>

      <div style={{ marginTop: 10, backgroundColor: "black", height:200, }}>
        <h4 style={{color:"white",paddingTop:30, paddingLeft:60 }}>contact us!</h4>
        
        
      </div>
      {/* <div>
        <h2>Contact us form</h2>
      <form>
        <input placeholder='email' >email</input>
        <input placeholder='details'>details</input>
        <input placeholder='message'>message</input>
        <button>Contact us</button>
      </form>

      </div> */}
      
    </div>
  )
}

export default App
