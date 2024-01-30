import mysql from 'mysql'

// DB Connection  //

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456789",
  database: "word_quiz"
})

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  }
  console.log("connected as id " + connection.threadId)
})

const db = connection

export default db