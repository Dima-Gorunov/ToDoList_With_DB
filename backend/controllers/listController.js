const ApiError = require('../error/ApiError')
const {List} = require('../models/models')

class ListController {

    async create(req, res, next) {
        const {text} = req.body
        const obj = await List.findOne({where: {text}});
        if (obj) {
            return res.json({result_code: 1, message: "Объект с таким именем существует"})
        }
        const list = await List.create({text})
        return res.json(list)
    }

    async delete(req, res) {
        const {id} = req.body
        const list = await List.destroy({where: {id}})
        return res.json(list)
    }

    async deleteAllLists(req, res) {
        const list = await List.destroy({where: {}})
        return res.json(list)
    }

    async getAll(req, res) {
        const lists = await List.findAll()
        return res.json(lists)
    }

    async getOne(req, res) {

        const {id} = req.query
        const {text} = req.query
        const list = await List.findOne({where: {id}})
        res.json(list)
    }
}


module.exports = new ListController()