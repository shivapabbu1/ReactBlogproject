// import React from "react";
// import { NavLink,Link } from "react-router-dom";
// import Details from "./Details";
// import './ReuseComponent.css'

// const ReuseComponent = (props) => {
   
//     return (
//         <div>
//         <div className="card">
//             <div className="card-image">
//                 <Link to='/singlepage' state={props}>
//                      <img src={props.imgurl} alt="{not found}" /></Link>
//             </div>
//              <div className="card-data">
//                 <h2>{props.title}</h2>
//                 <p>{props.description}</p>
               
//             </div>
//         </div>
        
//     </div>
       
           
       
//     );
// };
// export default ReuseComponent

import React from 'react'
import './ReuseComponent.css'
import { Link } from 'react-router-dom'

const ReuseComponent = (props) => {
  console.log(props);
  return (
    <>
    <div className='parent'>
      <div className='image-container'>
    <Link to="/singlepage" state={props}>
            <img src={props.img} alt="error"/>
    </Link>
    </div> 
           <div className='comp-data'>   
            <p className='article'>{props.article}</p>
            <p className='title'>{props.title}</p>
            <p className='date'>{props.date}</p>
            </div> 

    </div> 
    </>
  )
}

export default ReuseComponent