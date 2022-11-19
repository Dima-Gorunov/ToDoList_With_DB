const Router = require('express')
const router = new Router()

const userRouter=require('./UserRouter')
const listRouter=require('./ListRouter')

router.use('/user', userRouter)
router.use('/list', listRouter)

module.exports = router