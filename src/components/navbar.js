import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  backgroundColor: '#E4BA41'
}

export default function Navbar(){

  return (
    <nav className="z-10">
      <ul className="absolute right-0 z-10 flex flex-row justify-end raanan-reg text-2xl">
        <li>
            <NavLink className="nav-box text-white" to = '/' exact activeStyle={activeStyle}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box text-white" to = '/experience' activeStyle={activeStyle}>
              Experience
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box text-white" to = '/projects' activeStyle={activeStyle}>
              Projects
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-box text-white" to = '/contact' activeStyle={activeStyle}>
              Contact
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}
