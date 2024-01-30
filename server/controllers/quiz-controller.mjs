import db from '../connection/index.mjs'

const addNewWord = (req, res) => {
  try {
    req.body.newWord[0].toUpperCase() + req.body.newWord.substring(1)
    const newWord = req.body.newWord[0].toUpperCase() + req.body.newWord.substring(1).toLowerCase()
    const newDefinition = req.body.definition
    db.query(`SELECT * FROM words WHERE word = "${newWord}"`, (err, results) => {
      if (results[0] === undefined) {
        db.query(`INSERT INTO words (word, define) VALUES ("${newWord}","${newDefinition}")`, (err, results) => {
          res.redirect('http://localhost:5000/new-word/success')
        })
      } else { res.redirect('http://localhost:5000/error/existing') }
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const getTotalQuestions = (req, res) => {
  try {
    db.query('select count(word) count from words', function (err, results) {
      if (err) throw err
      res.json(results[0].count)
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const findWords = (req, res) => {
  try {
    db.query(`SELECT * FROM words where left(word,1) = '${req.params.id}' ORDER BY word asc`, (err, results) => {
      res.json(results)
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const resetAsked = (req, res) => {
  try {
    db.query('UPDATE words SET asked = false WHERE asked = true', err => {
      if (err) { console.error(err); return res.status(500).end() }
      return res.status(200).json({ success: true })
    })
    
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const getQuestion = (req, res) => {
  try {
    let words
    let question
    let answersArr = []

    db.query('SELECT * FROM words WHERE asked = false', (err, results) => {
      if (err) throw err
      words = results
      question = words[random(words.length) - 1]
      let correct = question.word
      let option1 = chooseOption(words, answersArr, correct)
      answersArr.push(option1.word)
      let option2 = chooseOption(words, answersArr, correct)
      answersArr.push(option2.word)
      let option3 = chooseOption(words, answersArr, correct)
      answersArr.push(option3.word)
      answersArr.splice(random(0, 3), 0, correct)
      toggleAsked(question.word)
      const theeQuestion = {
        word: question.word,
        definition: question.define,
        answers: answersArr
      }

      res.json(theeQuestion)
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const chooseOption = (words, answersArr, correct) => {
  try {
    let option = words[random(words.length) - 1]
    if (answersArr.includes(option.word) || option.word === correct) {
      return chooseOption(words, answersArr)
    }
    return option
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const random = (a, b, callback) => {
  try {
    if (b === undefined) { b = a, a = 1 }
    let result = Math.floor((b - a + 1) * Math.random()) + a
    if (typeof callback === "function") { result = callback(result) }
    return result
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const toggleAsked = word => {
  try {
    db.query(`UPDATE words SET asked = true WHERE word = '${word}'`, (err, results) => {
      return
    })
  } catch { (err => res.redirect('error', 'http://localhost:5000/error', err)) }
}

const error = (req, res) => {
  res.redirect('http://localhost:5000/error')
}

export default {
  findWords,
  getQuestion,
  addNewWord,
  resetAsked,
  getTotalQuestions,
  error,
}