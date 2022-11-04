import React from 'react'
import { Link } from 'react-router-dom';
import'./Nav.css';
import { useState } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Nav = () => {
  // const mobilesize= useMediaQuery('(max-width:650px)')
const [click ,setClick] = useState(false);
const handleClick = ()=> setClick(!click)
const [color,setColor] = useState(false);
const changeColor =()=>{
  if(window.scrollY >= 10){
    setColor(true);
  }  else{
      setColor(false);

    }
  
};
window.addEventListener("scroll", changeColor );
  return (
    <div className={color?" navbar navbar-bg" : "navbar"  }>
      < Link to="/" ><><img style={{width:'65px',height:'63px ',marginTop:'1rem'}} src='LOGO.png'></img></></Link>
     
      <ul className={click? 'nav__menu active' : 'nav__menu'   }>
        <li>
          <Link  to="/">Home</Link>
        </li >
        <li>
          <Link  to="/About">About</Link>
        </li>
        <li >
          <Link  to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hambuger" onClick={handleClick}>
        {click? (<CloseIcon size={20} style={{color:'grey'}}/>) : (<MenuIcon size={20} style={{color:'grey'}}/>)}
        
        
      </div>

    </div>
  )
}

export default Nav
