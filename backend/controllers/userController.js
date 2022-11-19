const ApiError = require('../error/ApiError')

class UserController {

    async registration(req, res) {

    }

    async login(req, res) {

    }

    async checkAuth(req, res, next) {
        let {id} = req.query
        res.json({message:"qweqwe"})
    }

}

module.exports = new UserController()