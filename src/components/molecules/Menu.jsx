import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}

export default Menu
