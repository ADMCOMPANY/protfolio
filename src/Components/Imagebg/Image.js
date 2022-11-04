import React from 'react'

function Image(props) {
  return (
     <div className='about'>
    <div className="about__img">
    <img src={props.img} alt="kkk" style={{width:"250px",height:"250px",marginLeft:"3rem",marginTop:"5rem",marginBottom:"4rem"}} />
        </div>
    <div className="about__text"></div>
  
    </div>

  )
}

export default Image