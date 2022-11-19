const Router = require('express')
const router = new Router()
const listController = require('../controllers/listController')

router.post('/', listController.create)
router.get('/all',listController.getAll)
router.delete('/',listController.delete)
router.delete('/all',listController.deleteAllLists)

module.exports = router

