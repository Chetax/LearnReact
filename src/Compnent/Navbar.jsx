import React from "react";
import '../Compnent/Navbar.css';
import { useState } from "react";
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