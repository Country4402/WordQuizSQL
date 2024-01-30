import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import React from 'react'
import './Links.css'

const Links = props => {

  const { isLoggedIn } = props

  const logout = () => {
    window.localStorage.removeItem('api_token')
    window.location = '/'
  }

  return (
    <>
      <Link to="/" className="navbar-brand gold"><h2 className="hover gold">WORD QUIZ</h2></Link>
      {isLoggedIn ?
        <div className="btn-group dropleft">
          <div className="btn gold" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h2>Menu</h2></div>
          <div className="dropdown-menu text-center">
            <Link to="/quiz" className="nav-link gold hover mt-3 mb-3"><span>Play Word Quiz</span ></Link>
            <Link to="/highscores" className="nav-link gold hover mb-3"><span>High Scores</span ></Link>
            <Link to="/words-list" className="nav-link gold hover mb-3"><span>Word List</span></Link>
            <Link to="/new-word" className="nav-link gold hover mb-3"><span>Add a Word</span></Link>
            <Link to="/stats" className="nav-link gold hover mb-3"><span>Stats</span></Link>
            <Link to="/" className="nav-link gold hover mb-3"><span>Home</span ></Link>
            <div className="dropdown-divider"></div>
            <Link to="/" onClick={logout} className="nav-link gold hover mb-3"><span>LOGOUT</span></Link>
          </div>
        </div>
        :
        <div className="btn-group dropleft">
          <div className="btn gold" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><h2>Menu</h2></div>
          <div className="dropdown-menu text-center">
            <Link to='/signup'><h3 className="nav-link gold hover mt-2 mb-3">Sign up</h3></Link>
            <div className="dropdown-divider"></div>
            <Link to='/login'><h3 className="nav-link gold hover mb-3">Login</h3></Link>
          </div>
        </div>
      }
    </>
  )

}

export default Links