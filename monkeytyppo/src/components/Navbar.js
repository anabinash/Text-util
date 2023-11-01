
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(prop) {
   
  let stylist=( )=>{
       
   }
 
  // document.getElementById('toogleBtn').innerHTML="DarkMode";
  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <Link className="navbar-brand" to="/textform">Text Form</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about"  modes={prop.mode} >About</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link disabled" href="#">Disabled</a> */}
      </li>
    </ul>
    <form className={`form-inline my-2 my-lg-0 ${prop.mode==="light"?"dark":"light"}`}>
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    
     
   <div className="form-check form-switch id='toogleBtn">
   
  
   <h5 style={{marginLeft:'60rem',marginTop:"8px", position:"sticky" }}>  Dark Mode </h5>
   <div  className='d-flex'>
   <div  className='bg-primary rounded mx-2' onClick={()=>{prop.togglmode('primary')}} style={{height:'20px',width:"20px" , cursor:"pointer"}} ></div>
   <div  className='bg-secondary rounded mx-2' onClick={()=>{prop.togglmode('secondary')}}  style={{height:'20px',width:"20px", cursor:"pointer"}} ></div>
   <div  className='bg-success rounded mx-2' onClick={()=>{prop.togglmode('success')}}  style={{height:'20px',width:"20px", cursor:"pointer"}} ></div>
   <div  className='bg-danger rounded mx-2' onClick={()=>{prop.togglmode('danger')}}  style={{height:'20px',width:"20px", cursor:"pointer"}} ></div>
   <div  className='bg-warning rounded mx-2' onClick={()=>{prop.togglmode('warning')}}  style={{height:'20px',width:"20px", cursor:"pointer"}} ></div>
   </div>  
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{prop.togglmode(null)}}/>
  <label className="form-check-label" for="flexSwitchCheckDefault" ></label>
  
     
   </div> 
  
    </form>

  </div>
  
</nav>

    </div>
  )
}
