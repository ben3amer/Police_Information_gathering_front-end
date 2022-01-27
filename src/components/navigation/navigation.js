import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, useNavigate } from 'react-router-dom'

import AuthContext from '../../store/auth-context'

function Navigation() {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const logoutHandler = () => {
    authCtx.logout()
    
    navigate('/')
  }

  return (
    <div className='navigation'>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            Police Information Gathering
          </NavLink>
          <div>
            <ul className='navbar-nav ml-auto'>
              {!authCtx.isLoggedIn && (
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Login
                </NavLink>
              </li>)}
                   {authCtx.isLoggedIn && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/search'>
                      Search
                    </NavLink>
                  </li>)}
                  {authCtx.isLoggedIn && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/createInfraction'>
                      Add Infraction
                    </NavLink>
                  </li>)}
                  {authCtx.isLoggedIn && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/' onClick={logoutHandler}>
                      Logout
                    </NavLink>
                  </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
