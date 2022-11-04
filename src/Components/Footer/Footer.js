import React from 'react'
import './Footer.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
      <div className="footer__left">
        <div className="home">
        <HomeIcon size={20} style={{color:'white' , marginRight:'1rem'}} className='icon'/>  
       
        <div >
          <p>123 housing colony mankaav</p>
          <p>kozhikode</p>
        </div>
        </div>
        <div className="phone">
       <PhoneIcon size={20} style={{color:'white', marginRight:'2rem' ,marginTop:'1rem'}} className='icon'/> <div className='demo' style={{paddingLeft:'2.5rem',marginTop:'-1.6rem',marginBottom:'1rem'}}><h4> +91 7356849378</h4></div>
        </div>
        <div className="mail">
         <EmailIcon size={20} style={{color:'white', marginRight:'1rem'}} className='icon'/>
         <div className="demo" style={{paddingLeft:'2.5rem',marginTop:'-1.7rem'}}><h4>rushaida@gmail.com</h4></div>
        </div>


        
      </div>
      <div className="footer__right">
        <h4>About my company</h4>
        <p>hey iam rushaida co founder of webx.
          i enjoy discussing new projects and ideas.
        </p>
        <div className='social'>
         <FacebookIcon size={30} style={{color:'white', marginRight:'1rem'}}/>
         <InstagramIcon size={20} style={{color:'white', marginRight:'1rem'}}/>
         <TwitterIcon size={20} style={{color:'white', marginRight:'1rem'}}/>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer
