import React from 'react'
import ReuseComponent from '../Components/ReuseComponent'
import Toppost from "../Components/Toppost";
import "./Bollywood.css";
const Holywood = () => {
  return (
    <div className="main-container">
    <div className="left-data">
       <div className="comp-div">
      <ReuseComponent
     img="http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg"
     title="2012"
     article="A frustrated writer struggles to keep his family alive when a series of global catastrophes threatens to annihilate mankind."
     
         />
    </div>
    <div className="comp-div">
          <ReuseComponent
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg"
          title="Matrix"
          article="When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life."
          
             />
    </div>
    <div className="comp-div">
          <ReuseComponent 
           img="https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg"
           title="Harypotter"
           article="Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle."
            />
      </div>
</div>

<div className="right-data">
      <div className="comp-right">  
      <Toppost
      img="http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg"
      title="2012"
    />
      </div>
      <div className="comp-right">
          <Toppost
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg"
          title="Matrix"
          
             />
             </div>
             <div className="comp-right">
             <Toppost
              img="https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg"
              title="Harypotter"
             />
            </div>
            <div className="ad">advertisment</div>


      </div>
    </div> 
    
    
   ) 
}
export default Holywood