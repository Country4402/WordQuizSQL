import { WordApi, writeStat, getTotalQuestions } from '../../api'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../assets/UserContext'
import Modal from '../../components/Modal'
import './Quiz.css'

let right = 0
let total = 0

const Quiz = () => {

  const [user] = useContext(UserContext)
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [word, setWord] = useState('')
  const [firstShow, setFirstshow] = useState(true)
  const [timerShow, setTimerShow] = useState(false)
  const [show, setShow] = useState(false)
  const [clock, setClock] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [calcPercent, setCalcPercent] = useState(0)
  const [answered, setAnswered] = useState('')
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [correctArr, setCorrectArr] = useState([])
  const [wrongArr, setWrongArr] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleTimerShow = () => setTimerShow(true)

  let timer = clock
  let theClock
  let percent

  useEffect(() => {
    setClock(300)
    getTotalQuestions().then(res => setTotalQuestions(res.data))
  }, []) // eslint-disable-line

  const setStat = () => {
    const date = new Date()
    const time = date.toLocaleString()
    const statID = Date.now()
    const userID = user.email
    const userName = user.username
    const percent = calcPercent
    const answeredCorrect = correctArr.toString()
    const answeredWrong = wrongArr.toString()
    const userInfo = { statID, userID, userName, wrong, correct, totalAnswered, answeredCorrect, answeredWrong, percent, time }
    writeStat(userInfo)

  }

  const stopQuiz = () => {
    clearInterval(theClock)
    setStat()
    window.location.href = "/"
  }

  const countDown = () => {
    theClock = setInterval(() => {
      if (timer >= 1) {
        timer--
        setClock(timer)
      } else {
        handleClose()
        handleTimerShow()
      }
    }, 1000)
  }

  const calculatePercentage = () => {
    percent = right / total
    if (isNaN(percent)) {
      percent = '0'
    } else {
      if (percent === 1) {
        percent = '100'
      } else {
        if (percent < 0.01) {
          percent = '0'
        } else { percent = percent.toFixed(2).toString().slice(2, 4) }
      }
    }
    setCalcPercent(percent)
  }

  const getQuestion = async () => {
    await WordApi()
      .then(question => {
        const { answers, definition, word } = question.data
        setQuestion(definition)
        setAnswers(answers)
        setWord(word)
      })
  }

  const dismissFirstModal = () => {
    setClock(300)
    resetAsked()
    dismissModal()
    countDown()
  }

  const resetAsked = () => {
    fetch(`http://localhost:3000/api/resetAsked`, { method: 'PUT' })
      .then(() => console.log('Asked => FALSE'))
      .catch(err => console.error(err))
  }

  const handleAnsweredModalShow = () => {
    handleShow()
    setTimeout(() => { dismissModal() }, 1500)
  }

  const checkAnswer = e => {

    const theChoice = e.target.name
    const rightAnswer = e.target.id
    total++
    if (theChoice === rightAnswer) {
      setCorrect(correct + 1)
      right++
      const rightSet = word +'/'+ question
      let yep = correctArr
      yep.push([rightSet])
      setCorrectArr(yep)
      setAnswered('CORRECT')
      handleAnsweredModalShow()
    } else {
      setWrong(wrong + 1)
      const wrongSet = word +'/'+ question
      let nope = wrongArr
      nope.push([wrongSet])
      setWrongArr(nope)
      setAnswered('INCORRECT')
      handleAnsweredModalShow()
    }
    setTotalAnswered(totalAnswered + 1)
    calculatePercentage()
  }

  const dismissModal = () => {
    getQuestion()
    setFirstshow(false)
    handleClose()

  }

  return (
    <>
      <div className="nameDiv p-3"><h1 className="col-12 gold mt-3">{user.username}</h1></div>
      <div id="img">
        <div className="text-center">
          <div id="scoreDiv">
            <div className="row scoreD mb-5">
              <h4 className="col-6"><b>Correct: </b>{correct}</h4>
              <h4 className="col-6"><b>Wrong: </b>{wrong}</h4>
            </div>
          </div>
          <div className="answerDiv">
            {answers.map((ans) => {
              return (
                <button onClick={checkAnswer} className="btn btn-dark questionFont" id={word} key={ans} name={ans}>{ans}</button>
              )
            })}
          </div>
          <div className="questionDiv">{question}</div>
          {
            firstShow ? (
              <Modal>
                <div id="modalDiv">
                  <h1 className="black">You Have <b className="gold">{clock}</b> seconds to answer as many questions as possible! There are <b className="gold">{totalQuestions}</b> questions total!</h1>
                  <hr />
                  <h4 className="gold">Good Luck!!</h4>
                  <button className="btn btn-dark mt-3" onClick={dismissFirstModal}><span className="gold hover">Start Quiz</span></button>
                </div>
              </Modal>
            ) : null
          }
          {
            show ? (
              <Modal>
                <div id="modalDiv">
                  <h1 className="modalAnswer">{answered}</h1>
                  <hr />
                  <h5 className="darkGray">THE QUESTION</h5>
                  <h1>{question}</h1>
                  <hr />
                  <h5 className="darkGray">THE ANSWER</h5>
                  <h1>{word}</h1>
                </div>
              </Modal>
            ) : null
          }
          {
            timerShow ? (
              <Modal>
                <div id="modalDiv">
                  <h1 className="gold">Quiz Over</h1>
                  <hr />
                  <h5>You got <b className="gold">{correct}</b> Correct and <b className="gold">{wrong}</b> Wrong!</h5>
                  <h1><b className="gold">{calcPercent}%</b> Accurate</h1>
                  <button onClick={stopQuiz} className="btn btn-dark mt-3"><span className="gold hover">Back Home</span></button>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
      <footer className="py-4">
        <div className="row">
          <h2 className="col-5 gold">{clock}</h2>
          <button className="btn btn-dark col-2" onClick={handleTimerShow}><h6 className="gold hover">End Quiz</h6></button>
          <h2 className="col-5 gold">{calcPercent}%</h2>
        </div>
      </footer>
    </>
  )

}

export default Quiz