import questionRouter from './question-router.mjs'
import authRouter from './auth-router.mjs'
import userRouter from './user-router.mjs'
import express from 'express'

const router = express.Router()

router.use('/', authRouter)
router.use('/', userRouter)
router.use('/', questionRouter)

export default router