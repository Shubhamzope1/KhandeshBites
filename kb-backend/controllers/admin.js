const admin = require('../models/admin');


exports.postlogin = (req, res) => {
    const { Username, Password } = req.body;
    admin.find({ Username: Username, Password: Password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ message: "user Logedin Succesfully", isauthenticateduser: true, admin: response })
            } else {
                res.status(200).json({ message: "user Logedin unSuccesful", isauthenticateduser: false, admin: response })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


exports.getAdmin = (req, res) => {
    admin.find()
        .then(response => {
            res.status(200).json({
                message: "admin fetched successfully",
                admin: response
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error fetching admin",
                error: err
            });
        });
}