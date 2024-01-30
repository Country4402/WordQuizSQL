import React, { useState, useEffect } from 'react'
import { getHighScores } from '../../api'

const HighScores = () => {

  const [highScores, setHighScores] = useState([])

  useEffect(() => { retrieveHighScores() }, [])

  const retrieveHighScores = async () => {
    try {
      await getHighScores()
        .then(res => {
          setHighScores(res.data)
        })
    } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
  }
  if (highScores.length) {

    return (
      <>
        <div id="wordLightBox" className="highScoreDiv">
          <h1 className=" mb-5 gold"><u>Word Quiz High Scores</u></h1>
          <div className="mb-5">
            {highScores.map(score => {
              const time = new Date(score.settime)
              const date = time.toLocaleString()
              return (
                <div key={score.settime}>
                  <hr />
                  <h1 className="mt-3 white"><b><u>{score.userName}</u></b></h1>
                  <h5><b className="gold">{date}</b></h5>
                  <h1 className="my-3 gold"><b>{score.percent}%</b><b className="offwhite"> Accuracy</b></h1>
                  <h2 className="my-4 offwhite">answered <b className="gold">{score.totalAnswered}</b> total questions</h2>
                  <h4 className="offwhite mb-5"><b className="gold">{score.correct}</b> Correct and <b className="gold">{score.wrong}</b> wrong</h4>
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
          <h1 className="white mt-5"><b>No High Scores Currently Available</b></h1>
        </div>
        <footer className="py-4">
          <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
        </footer>
      </>
    )
  }

}
export default HighScores