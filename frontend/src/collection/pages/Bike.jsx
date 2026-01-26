import React from 'react'
import Navbar from '../navbar/navbar';

function Bike  ()  {
   const { bikeId } = useParams();
  console.log("BIKE ID", bikeId);
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Bike;
