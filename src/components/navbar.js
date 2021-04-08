import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  backgroundColor: '#E4BA41'
}

export default function Navbar(){

  return (
    <nav>
      <ul className="flex flex-row justify-end raanan-reg text-2xl">
        <li>
            <NavLink className="nav-box" to = '/' exact activeStyle={activeStyle}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box" to = '/experience' activeStyle={activeStyle}>
              Experience
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box" to = '/projects' activeStyle={activeStyle}>
              Projects
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box" to = '/contact' activeStyle={activeStyle}>
              Contact
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}
