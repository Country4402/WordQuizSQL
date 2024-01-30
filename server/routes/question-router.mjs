import quizController from '../controllers/quiz-controller.mjs'
import express from 'express'

const router = express.Router()

// Question Routes //

router.get('/error', quizController.error)
router.get('/question', quizController.getQuestion)
router.get('/total-questions', quizController.getTotalQuestions)
router.get('/words/:id', quizController.findWords)
router.put('/resetAsked', quizController.resetAsked)
router.post('/new-word', quizController.addNewWord)

export default router