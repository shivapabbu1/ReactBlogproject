import React from 'react'
import ReuseComponent from '../Components/ReuseComponent'
import Toppost from "../Components/Toppost";
import "./Bollywood.css";
const Fitness = () => {
  return (
    <div className="main-container">
    <div className="left-data">
       <div className="comp-div">
      <ReuseComponent
     title= "Running"
     img= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/330px-Ludovic_and_Lauren_%288425515069%29.jpg"
    
     article= "Regular physical activity such as running can significantly improve mental health, self-confidence, healthy ageing, and quality of life."
     
         />
    </div>
    <div className="comp-div">
          <ReuseComponent 
           title="Skateboarding"
           img= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg/330px-Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg"
          
           article= "skatebording it's an endurance sport, fitness skating stimulates your entire cardiovascular system, develops heart muscle, and improves blood flow. If done regularly"
           
             />
    </div>
    <div className="comp-div">
          <ReuseComponent 
           title= " Swimming "
           img= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/330px-Natacio.jpg"
           
           article= "Other benefits of swimming · being a relaxing and peaceful form of exercise · alleviating stress · improving coordination, balance and posture ·"
        
            />
      </div>
</div>

<div className="right-data">
      <div className="comp-right">  
      <Toppost
      title= "Running"
      img= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/330px-Ludovic_and_Lauren_%288425515069%29.jpg"
     
      />
      </div>
      <div className="comp-right">
          <Toppost
          title="Skateboarding"
          img= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg/330px-Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg"
         
             />
             </div>
             <div className="comp-right">
             <Toppost
              title= " Swimming "
              img= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/330px-Natacio.jpg"
              
              
           />
            </div>
            <div className="ad">advertisment</div>


      </div>
    </div> 
  
  )
}

export default Fitness