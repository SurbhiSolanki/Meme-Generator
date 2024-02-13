import React from 'react'
import TrollFace from '../images/TrollFace.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='heading'>
        <img src={TrollFace} alt="" className='troll' />
        <span>Meme Generator</span>
      </div>
      <span className='react'>React Course-Project 3</span>
    </div>
  )
}

export default Navbar
