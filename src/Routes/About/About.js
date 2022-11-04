import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import Image from '../../Components/Imagebg/Image'
const About = () => {
  return (
    <div>
       
        
       
      <Nav/>
      <div className="demo" style={{display:'flex'}}>
      <Image img='kkk.jpg'/>
      <Image img='kkk.jpg'/>
      <Image img='kkk.jpg'/>
      <Image img='kkk.jpg'/>
      <Image img='kkk.jpg'/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default About
