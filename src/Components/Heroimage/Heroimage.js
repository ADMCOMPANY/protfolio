import React from 'react'
import { Link } from 'react-router-dom';
import './Heroimage.css';


const Heroimage = () => {
  return (
    <div className='hero'>
        <div className="mask">
        <img src="bg4.jpg"  alt="" className="into-img" />

        </div>
        <div className="content">
            <p>hey,iam a freelancer</p>
            <h1>ECLAT</h1>
        
        <div  >
            <Link to="/About" className='btn'>About</Link>
            <Link to="/Contact" className='btn-light'>Contact</Link>
        </div>

        </div>
    </div>
  )
}

export default Heroimage
