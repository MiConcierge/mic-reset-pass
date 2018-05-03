import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header className='container-fluid'>
    <h1 className='Header-h1'>Reset Password</h1>
    <nav className='Header-nav'>
      <NavLink
        to='/email'
        className='Header-navLink'
        activeClassName='Header-isActive'
      >
        Reset
      </NavLink>
      <NavLink
        to='/pass'
        className='Header-navLink'
        activeClassName='Header-isActive'
      >
        Pass
      </NavLink>
    </nav>
  </header>
)
