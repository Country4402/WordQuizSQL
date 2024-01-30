import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Links from '../Links'
import React from 'react'

const NavBar = ({ isLoggedIn }) => (

  <div className='navbar navbar-dark bg-dark'>
    <Links isLoggedIn={isLoggedIn} />
  </div>

)

export default NavBar