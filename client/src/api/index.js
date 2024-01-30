import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const WordApi = async () => {
  try {
    const res = await Api.get('/question')
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const newWord = async () => {
  try {
    const res = await Api.post('/new-word')
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const handleSignup = async newUser => {
  try {
    const res = await Api.post('/signup', newUser)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const handleLogin = async user => {
  try {
    const res = await Api.post('/login', user)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const handleNewWord = async word => {
  try {
    const res = await Api.post('/new-word', word)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const userInfo = async () => {
  try {
    const token = window.localStorage.getItem('api_token')
    const res = await Api.get('/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const getStats = async userID => {
  try {
    const res = await Api.get(`/stats/${userID}`)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const writeStat = async userInfo => {
  try {
    const res = await Api.post(`/stats/${userInfo.userID}`, userInfo)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const findWords = async char => {
  try {
    const res = await Api.get(`/words/${char}`)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const getTotalQuestions = async () => {
  try {
    const res = await Api.get('/total-questions')
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const getStatDetails = async info => {
  try {
    const res = await Api.post(`/stat-details/${info.id}`, info)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const deleteStat = async info => {
  try {
    const res = await Api.put(`/stat-details/${info.id}`, info)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export const getHighScores = async () => {
  try {
    const res = await Api.get(`/highscores`)
    return res
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const Apis = {
  WordApi,
  newWord,
  handleSignup,
  handleLogin,
  getStats,
  deleteStat,
  writeStat,
  findWords,
  getTotalQuestions,
  getStatDetails,
  handleNewWord,
  getHighScores,
}

export default Apis