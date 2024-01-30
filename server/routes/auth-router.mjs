import UserCtrl from '../controllers/user-controller.mjs'
import express from 'express'

const router = express.Router()

// Authentication Routes //

router.post('/signup', UserCtrl.createUser)
router.post('/login', UserCtrl.loginUser)

export default router