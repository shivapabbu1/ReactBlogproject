import React from 'react'
import { useLocation } from 'react-router-dom'

const Singlepage = () => {

  const location=useLocation();

  return (
    

   <div>
      <img src={location.state.img} style={{height:"300px",width:"300px",borderRadius:"10px",marginLeft:"38%",marginTop:"3%"}}/>
      <h5 style={{textAlign:"center"}}>{location.state.title}</h5>
      <p style={{fontSize:"18px",width:"70%",marginLeft:"15%"}}>{location.state.article}</p>
    </div>
  
  )
}

export default Singlepage