import React from 'react';
import Navbar from"./Components/NavBar"
import Header from './Components/Header';
import BlogRouter from './Components/BlogRouter';
import { Link } from 'react-router-dom';
import "./App.css";
// import Details from './Components/Details';
function App() {
  return (
    < >
   
      <Header/>
      <div className='nav'>

       <Link to="/Home"><li>Home</li></Link>
        <Link to="/Bollywood"><li>BOLLYWOOD</li></Link>
        <Link to="/Holywood"><li>Holywood</li></Link>
        <Link to="/food"><li>food</li></Link>
        <Link to="/technology"><li>technology</li></Link>
        <Link to="/fitness"><li>fitness</li></Link>
        
        </div>
      <BlogRouter/>
    
    </>
  );
}

export default App;
