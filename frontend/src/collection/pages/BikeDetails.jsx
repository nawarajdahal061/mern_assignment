import React from 'react'

function BikeDetails  ()  {
    let user = {
        name: "Royal Enfield Shotgun 650",
        details: "The 2024 Royal Enfield Shotgun 650 is a retro-styled cruiser powered by a 648cc air/oil-cooled parallel-twin engine with a 270° crank, producing 46-47 bhp and 38-39 lb-ft of torque."
    };
  return (
    <div style={{display:'flex',
     alignItems:"center",
     marginTop:28}}>
        <div style={{
          backgroundColor: "blue",
          height: "60vh",
          borderRadius: 10,
          padding: 20,
          width: "50vw",
        }}>
            <h2 style={{textalign:'center'}}>{user.name}</h2>
            <span style={{textAlign:'center'}}>{user.details}</span>
        </div>
      
    </div>
  )
}

export default BikeDetails;
