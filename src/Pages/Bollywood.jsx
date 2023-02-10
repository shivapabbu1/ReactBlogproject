import React from "react";
import ReuseComponent from "../Components/ReuseComponent";
import Toppost from "../Components/Toppost";
import "./Bollywood.css";


const Bollywood =()=>{

   return(
   <> 
   <div className="main-container">
    <div className="left-data">
       <div className="comp-div">
      <ReuseComponent
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteAcOWSUZ-aGh58kU07sV0A0gqT3PqQZfBA&usqp=CAU"
      article="Kabir Rajdheer Singh, a house surgeon at the Delhi Institute of Medical Sciences, suffers from severe anger management problems that gain him the reputation of a bully."
      title="kABIR SINGH"
      date="Date:Relased in 2011"
         />
    </div>
    <div className="comp-div">
          <ReuseComponent 
              title= "uri"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzegg5mPbXHaDiGV-5gkk5iIImW6OpZa5hww&usqp=CAU"
            
              article= "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group."
             />
    </div>
    <div className="comp-div">
          <ReuseComponent 
            title= "brhamstra"
            img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYg8l_FeIAp9t2rC67h7b_gpXVbX22lqJBQ&usqp=CAU"
           
            article ="Brahmastra: Part One: Shiva relies heavily on two aspects - its visual effects and the love story of its lead pair, Shiva and Isha, played by Ranbir Kapoor and Alia Bhatt."
             />
      </div>
</div>

<div className="right-data">
      <div className="comp-right">  
      <Toppost
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteAcOWSUZ-aGh58kU07sV0A0gqT3PqQZfBA&usqp=CAU"
    //   article="Kabir Rajdheer Singh, a house surgeon at the Delhi Institute of Medical Sciences, suffers from severe anger management problems that gain him the reputation of a bully."
      title="kABIR SINGH"
      date="Date:Relased in 2011"
         />
      </div>
      <div className="comp-right">
          <Toppost
              title= "uri"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzegg5mPbXHaDiGV-5gkk5iIImW6OpZa5hww&usqp=CAU"
            
            //   article= "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group."
             />
             </div>
             <div className="comp-right">
             <Toppost
            title= "brhamstra"
            img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYg8l_FeIAp9t2rC67h7b_gpXVbX22lqJBQ&usqp=CAU"
           
            // article ="Brahmastra: Part One: Shiva relies heavily on two aspects - its visual effects and the love story of its lead pair, Shiva and Isha, played by Ranbir Kapoor and Alia Bhatt."
             />
            </div>
            <div className="ad">advertisment</div>


      </div>
    </div> 
    
    </>
   ) 
}
export default Bollywood