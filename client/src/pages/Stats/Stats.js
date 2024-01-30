import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../assets/UserContext'
import { Link } from 'react-router-dom'
import { getStats } from '../../api'
import './Stats.css'

const Stats = () => {

  const [scores, setScores] = useState([])
  const [user] = useContext(UserContext)

  useEffect(() => {
    const id = user.email

    retrieveStats(id)
  })

  const retrieveStats = async id => {
    try {
      await getStats(id)
        .then(res => {
          const theScores = res.data.scores
          setScores(theScores)
        })
    } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }

  }

  if (scores.length) {
    return (
      <>
        <div id="wordLightBox" className="statDiv">
          <h1 className="gold">{user.username}</h1>
          <h3 className=" mb-5 white">Your Stats</h3>
          <div className="mb-5">
            {scores.map(score => {
              const time = score.settime
              const date = time.toLocaleString()
              return (
                <div key={score.settime}>
                  <hr />
                  <h1><b className="gold">{date}</b></h1>
                  <h2 className="my-4 white">You answered <b className="gold">{score.totalAnswered}</b> total questions</h2>
                  <h4 className="white mb-4">You got <b className="gold">{score.correct}</b> Correct and <b className="gold">{score.wrong}</b> wrong</h4>
                  <Link to={`/stat-details/${score.statID}`}><span className="gold"><h4><u>Stat Details</u></h4></span></Link>
                </div>
              )
            })}
          </div>
        </div>
        <footer className="py-4">
          <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
        </footer>
      </>
    )
  } else {
    return (
      <>
        <div id="wordLightBox" className="statDiv">
          <h1 className="gold my-5"><b>{user.username}</b></h1>
          <h1 className="white mt-5"><b>No Stats Currently Available</b></h1>
        </div>
        <footer className="py-4">
          <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
        </footer>
      </>
    )
  }

}

export default Stats