const Owner = require('../models/Owner')

const index = (req, res) => {

}
const createOwner = (req, res) => {
    Owner.create(req.body, (err, owner) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(createTruck)
    })
}
const deleteOwner = (req, res) => {
    Owner.findByIdAndDelete(req.params.ownerId, (err, deletedOwner) => {
        if (err) {
            res.status(400).json(err)
            return
        }
        res.json(deletedOwner)
    })
}

module.exports = {
    index,
    createOwner,
    deleteOwner
}