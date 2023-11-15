import React from "react";
import './Home.css';
function ChangeTheam({color}){
console.log("Change Color To ",String(color));
}
const Home=()=>{
    return <>
    <div className="Headline">    
       <h1 style={{fontSize:"70px"}}>Hello <span style={{color:"aqua"}}>And</span>  Welcome</h1>
       <h3 style={{fontSize:"40px",textDecoration:"underline"}}>Let's Apply <span style={{color:"aqua"}}>JSX</span> 
       <br /> And Some Basic Consept</h3>
 
    </div>

<h3 style={{marginLeft:"50px",marginTop:"50px" ,fontSize:"25px"}}>Applying <span style={{color:"aqua"}}>If</span> Else Condtion : </h3>

<div className="IfElseDiv">
    <h3 style={{textAlign:"center",fontSize:'30px'}}>Chose One Option : </h3>
    <div className="choise" style={{textAlign:"center",cursor:"pointer"}}>
    <span className="Dark" style={{textAlign:"center",fontSize:'30px'}} onClick={() => console.log("dark")}>Dark </span> 
    <span style={{textAlign:"center",fontSize:'30px'}}> Or </span> 
    <span className="Aqua" style={{textAlign:"center",fontSize:'30px'}}  onClick={() => console.log("blue")}> Blue </span> 
    </div>
</div>
    </>
}
export default Home;