import React, { useContext, useState, useEffect } from 'react'
import { getStatDetails, deleteStat } from '../../api'
import { useParams, Link } from 'react-router-dom'
import UserContext from '../../assets/UserContext'
import Modal from '../../components/Modal'
import './StatDetails.css'

const StatDetails = () => {

  const { id } = useParams()
  const [user] = useContext(UserContext)
  const [time, setTime] = useState('')
  const [show, setShow] = useState(false)
  const [correctArr, setCorrectArr] = useState([])
  const [wrongArr, setWrongArr] = useState([])
  const [percent, setPercent] = useState('')

  const userID = user._id

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const info = { userID, id }
    getStatDetails(info)
      .then(stat => {
        const { settime, correctArr, wrongArr, percent } = stat.data.statInfo[0]
        setPercent(percent)
        const correctSet = []
        const correctInput = correctArr.split(',')
        correctInput.forEach(set => correctSet.push(set.split('/')))
        setCorrectArr(correctSet)
        const wrongSet = []
        const wrongInput = wrongArr.split(',')
        wrongInput.forEach(set => wrongSet.push(set.split('/')))
        setWrongArr(wrongSet)
        setTime(settime)
      })
  }, []) // eslint-disable-line

  const deleteStatFn = () => {
    const info = { userID, id }
    deleteStat(info)
  }

  return (
    <>
      <div id="wordLightBox" className="statDiv">
        <h1 className="gold mb-4"><b>{time}</b></h1>
        <h4 className="white">{percent}% Accuracy</h4>
        <hr />
        <div className="row my-5">
          <div className="col-6">
            <h4 className="white mb-3"><b>Answered Correctly</b></h4>
            {correctArr.map(word => {
              return (
                <div key={word}>
                  <hr />
                  <h4 className="gold">{word[0]}</h4>
                  <p className="white">{word[1]}</p>
                </div>
              )
            })}
          </div>
          <div className="col-6">
            <h4 className="white mb-3"><b>Answered Incorrectly</b></h4>
            {wrongArr.map(word => {
              return (
                <div key={word}>
                  <hr />
                  <h4 className="gold">{word[0]}</h4>
                  <p className="white">{word[1]}</p>
                </div>
              )
            })}
          </div>
          {
            show ? (
              <Modal>
                <div>
                  <h1>Are you sure that you want to delete this stat??</h1>
                  <Link to={`/stat-details/${id}`} onClick={handleClose} className="btn btn-dark gold hover">CANCEL</Link>
                  <Link to="/stats" onClick={deleteStatFn} className="btn btn-dark gold hover">DELETE</Link>
                </div>
              </Modal>
            ) : null
          }
        </div>
        <div className="row mb-5">
          <Link to="/stats" className="col-3 offset-2 btn btn-dark"><span className="hover">Back</span></Link>
          <button onClick={handleShow} className="btn btn-dark col-3 offset-2"><span className="hover">Delete</span></button>
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default StatDetails