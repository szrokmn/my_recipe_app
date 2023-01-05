import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </a>
      <div>
        <Link to = "/">Home</Link>
        <Link to = "about">About</Link>
        <Link to = "register">Register</Link>
        <Link to = "logout">Logout</Link>
      </div>
    </nav>
  )
}

export default Navbar