import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
let Example=()=>
{
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
 
        <NavLink className="navbar-brand" exact to='/' >Programmers Point</NavLink>
  
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <NavLink className="nav-link" exact to='/' >Home</NavLink>
    </li>
    <li class="nav-item">
    <NavLink className="nav-link" exact to='/about' >About</NavLink>
    </li>
    <li class="nav-item">
    <NavLink className="nav-link" exact to='/contact' >Contact</NavLink>
    </li>
    <li class="nav-item">
    <NavLink className="nav-link" exact to='/services' >services</NavLink>
    </li>
  </ul>
</nav>
        </>
    )
}
export default Example;