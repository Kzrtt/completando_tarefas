const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.saveTask)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.saveUpdateTask)
router.post('/updatestatus', TaskController.updateStatus)
router.get('/', TaskController.showTasks)

module.exports = router