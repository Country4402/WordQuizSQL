import UserController from '../controllers/user-controller.mjs'
import authenticateToken from '../helper/verifyJWT.mjs'
import express from 'express'

const router = express.Router()

// User Routes //

router.get('/user', authenticateToken, UserController.getUser)
router.get('/highscores', UserController.getHighScores)
router.route('/stats/:_id')
  .get(UserController.stats)
  .post(UserController.writeStat)
router.route('/stat-details/:_id')
  .post(UserController.statDetails)
  .put(UserController.deleteStat)

export default router