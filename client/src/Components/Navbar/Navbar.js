import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <Link className='nb-home' to="/">CRUD</Link>
      </div>
    </>
  )
}

export default Navbar;