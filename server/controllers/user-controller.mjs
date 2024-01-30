import createJWT from '../helper/createJWT.mjs'
import db from '../connection/index.mjs'

const writeStat = (req, res) => {
  try {
    const { statID, userID, userName, totalAnswered, correct, wrong, percent, answeredCorrect, answeredWrong, time } = req.body
    db.query(`INSERT INTO stats VALUES ('${statID}','${userID}','${userName}',${totalAnswered},${correct},${wrong},'${answeredCorrect}','${answeredWrong}',${percent}, '${time}')`, (err) => {
      if (err) { console.error(err); return res.status(500).end() }
      return res.status(200).json({ success: true })
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const createUser = (req, res) => {
  try {
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, (err, user) => {
      if (err) { console.error(err); return res.status(500).end() }
      if (user[0] === undefined) {
        db.query(`INSERT INTO users SET ?, password = sha2('${req.body.password}', 512)`,
          {
            username: req.body.username,
            email: req.body.email,
          })
        db.query(`SELECT * FROM users WHERE email = '${req.body.email}';`, (err, user) => {
          const token = createJWT(user)
          res.status(200).json({ success: true, token: token })
        })
      } else {
        console.log('User not created!')
        return res.status(400).json({ success: false, error: 'User not created' })
      }
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const loginUser = (req, res) => {
  try {
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}' && password = sha2('${req.body.password}',512);`, (err, user) => {
      if (err) { console.error(err); return res.status(500).end() }
      if (user[0] !== undefined) {
        const token = createJWT(user)
        return res.status(200).json({
          success: true,
          token: token
        })
      } else {
        console.log('Login not successful!')
        return res.status(400).json({ success: false, error: 'Failed Logging in!' })
      }
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const getUser = async (req, res) => {
  try {
    db.query(`SELECT * FROM users WHERE email = '${req.user}';`, (err, user) => {
      if (err) { console.error(err); return res.status(500).end() }
      res.status(200).json({ user: user })
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const stats = (req, res) => {
  try {
    db.query(`SELECT * FROM stats WHERE assignedTo = '${req.params._id}';`, (err, scores) => {
      if (err) { console.error(err); return res.status(500).end() }
      res.status(200).json({
        success: true,
        scores: scores
    })
  })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const statDetails = (req, res) => {
  try {
    const { id } = req.body
    db.query(`SELECT * FROM stats WHERE statID = ${id}`, (err, stat) => {
      if (err) { console.error(err); return res.status(500).end() }
      const statInfo = stat
      res.status(200).json({
        success: true,
        statInfo: statInfo
      })
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const deleteStat = (req, res) => {
  try {
    const { id } = req.body
    db.query(`DELETE FROM stats WHERE statID = '${id}';`, (err) => {
      if (err) { console.error(err); return res.status(500).end() }
      res.status(200).json({ success: true })
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const getHighScores = (req, res) => {
  try {
    db.query(`SELECT * FROM stats ORDER BY percent DESC`, (err, highScores) => {
      if (err) { console.error(err); return res.status(500).end() }
      res.status(200).json(highScores)
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

export default {
  createUser,
  loginUser,
  getUser,
  stats,
  statDetails,
  deleteStat,
  writeStat,
  getHighScores,
}