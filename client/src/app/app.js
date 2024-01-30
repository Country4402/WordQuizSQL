import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewWordSuccess from '../pages/NewWord/NewWordSuccess'
import ErrorExisting from '../pages/Error/ErrorExisting'
import UserContext from '../assets/UserContext'
import StatDetails from '../pages/StatDetails'
import HighScores from '../pages/HighScores'
import Dashboard from '../pages/Dashboard'
import NavBar from '../components/NavBar'
import WordList from '../pages/WordList'
import React, { useState } from 'react'
import NewWord from '../pages/NewWord'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Stats from '../pages/Stats'
import Words from '../pages/Words'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import './app.css'

const App = () => {

  const token = window.localStorage.getItem('api_token')
  const isLoggedIn = (token) ? true : false
  const user = useState('')

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes >
          <Route exact path="/" element={(isLoggedIn) ? <Dashboard /> : <Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/new-word" element={<NewWord />} />
          <Route exact path="/new-word/success" element={<NewWordSuccess />} />
          <Route exact path="/stats" element={<Stats />} />
          <Route exact path="/words-list" element={<WordList />} />
          <Route exact path="/words/:id" element={<Words />} />
          <Route exact path="/stat-details/:id" element={<StatDetails />} />
          <Route exact path="/highscores" element={<HighScores />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/error/existing" element={<ErrorExisting />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )

}

export default App