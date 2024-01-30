import db from './connection/index.mjs'
import routes from './routes/index.mjs'
import express from 'express'
import cors from 'cors'

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'Mysql connection error:'))
app.listen(apiPort, (err) => console.log(`${err ? err : `Server running on port ${apiPort}`}`))