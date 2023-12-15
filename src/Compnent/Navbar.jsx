import React from "react";
import '../Compnent/Navbar.css';
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar=()=>{
const textStyle={
    color:'aqua',
    fontweight:'bold',
};
const button=document.getElementsByClassName('collapseicon');
const [isClicked,setcliked]=useState(true);
const iconclick=()=>{
   setcliked(!isClicked);
}


useEffect(() => {

  const handleResize = () => {  // Function to handle window resize and update state
    if(window.innerWidth >= 800){
      setcliked(1);
    }
  };

  handleResize();   // Initial check on component mount
  window.addEventListener('resize', handleResize);// Add event listener for window resize

  // Clean up the event listener when component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

    return <>  
    <div className="Navbar">
    <div className="logo"> 
    J
    <span style={textStyle}>S</span>
    X 
    </div>
    <div className="collapseicon" onClick={iconclick} style={ {
    color: isClicked ? 'black' : 'aqua' ,
     }}>
    <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="list">
    <ul className="Listunorder">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Info</li>
    </ul>
  </div>
</div>
    <div className="collapselist" style={ {
    display: isClicked ? 'none' : 'block' ,
     }}>
  <ul className="Listunorder1" >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Info</li>
    </ul>
  </div>
    </>

};
export default Navbar;