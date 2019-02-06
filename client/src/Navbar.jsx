import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      {props.currentUser
        ? (
          <span>
            <Link to="/logout">Log Out</Link>
            <Link to="/list">Lists</Link>
          </span>
        )
        : (
          <span>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </span>
        )
      }
    </div>
  )
}

export default Navbar