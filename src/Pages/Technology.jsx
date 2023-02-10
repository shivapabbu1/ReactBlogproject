import React from 'react'
import ReuseComponent from '../Components/ReuseComponent'
import Toppost from "../Components/Toppost";
import "./Bollywood.css";
const Technology = () => {
  return (
    <div className="main-container">
    <div className="left-data">
       <div className="comp-div">
      <ReuseComponent
      img="https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg"
      title="IOT"
      article="Iot Explained.What it is, How it works, Why it matters."

         />
    </div>
    <div className="comp-div">
          <ReuseComponent 
               img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"
               title="Data Science"
               article="Data Science vs Big Data vs Data Analytics"/>
    </div>
    <div className="comp-div">
          <ReuseComponent 
            img="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"
            title="FullStack Development"
            article="The Rise of Full Stack Freelancing" />
      </div>
</div>

<div className="right-data">
      <div className="comp-right">  
      <Toppost
     img="https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg"
     title="IOT"
  

         />
      </div>
      <div className="comp-right">
          <Toppost
              img="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"
              title="FullStack Development"
              />
             </div>
             <div className="comp-right">
             <Toppost
             img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"
             title="Data Science"
             />
            </div>
            <div className="ad">advertisment</div>


      </div>
    </div> 
    
  )
}

export default Technology