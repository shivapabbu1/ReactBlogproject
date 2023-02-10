import React from 'react'
import ReuseComponent from '../Components/ReuseComponent'
import Toppost from "../Components/Toppost";
import "./Bollywood.css";
const Food = () => {
  return (
    <div className="main-container">
    <div className="left-data">
       <div className="comp-div">
      <ReuseComponent
     title= "Biryani"
     img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76dzfRW6VjXWfQlgAGxMxwew2A3JQFbC-YQ&usqp=CAU"
     
     article= "biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. "
    
         />
    </div>
    <div className="comp-div">
          <ReuseComponent 
              title= "Kebab"
              img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEBV4evZFMfYnO45FuvEp2HMILAiwzGbwIw&usqp=CAU"
              
              article= "Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments."
             />
    </div>
    <div className="comp-div">
          <ReuseComponent 
             img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm4ueDUuOZzULi9HFRXqkp3pNUDHRysG25w&usqp=CAU"
          
             article= "Mandi is a delicious combination of rice, chicken and a mixture of spices. "
             title="Mandi"
                          />
      </div>
</div>

<div className="right-data">
      <div className="comp-right">  
      <Toppost
      title= "Biryani"
      img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76dzfRW6VjXWfQlgAGxMxwew2A3JQFbC-YQ&usqp=CAU"
      
      
         />
      </div>
      <div className="comp-right">
          <Toppost
              title= "Kebab"
              img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEBV4evZFMfYnO45FuvEp2HMILAiwzGbwIw&usqp=CAU"
              
             />
             </div>
             <div className="comp-right">
             <Toppost
              img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm4ueDUuOZzULi9HFRXqkp3pNUDHRysG25w&usqp=CAU"
          
            
              title="Mandi"
                          />
            </div>
            <div className="ad">advertisment</div>


      </div>
    </div> 
  )
}

export default Food