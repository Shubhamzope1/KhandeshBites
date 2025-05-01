const categories = require('../models/categories')

exports.getcategories = (req, res) => {
    categories.find().then(
        response => {
            res.status(200).json({ message: "categories Fetched Succesfully", categories: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}

