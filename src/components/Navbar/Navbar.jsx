import React, {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const NavRef = useRef()

    const showNavbar = () => {
        NavRef.current.classList.toggle('responsive_navbar')
    }

  return (
        <div className='navbar'>
            <p>My Portfolio</p>
            <nav ref={NavRef}>
                <a href='https://www.behance.net/c5da0bce'>Behance</a>
                <a href='https://www.linkedin.com/in/zakariya-buhari-929076154/'>Zakariya Buhari | LinkedIn</a>
                <button className='get_btn'>
                    <a href='https://dribbble.com/saka04'>Dribble</a>
                </button>
                <button className='navbar_btn navbar_close' onClick={showNavbar}>
                    <FaTimes size="20px"/>
                </button>
            </nav>
            <button className='navbar_btn' onClick={showNavbar}>
                <FaBars size="20px"/>
            </button>
        </div>
  )
}

export default Navbar
