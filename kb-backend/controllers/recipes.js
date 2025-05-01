
const recipes = require('../models/recipes');

exports.getrecipes = (req, res) => {

    recipes.find()
        .then(response => {
            res.status(200).json({
                message: "Recipes fetched successfully",
                recipes: response
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error fetching recipes",
                error: err
            });
        });
};

exports.getsearch = (req, res) => {
    let keyword = req.query.keyword || '';
    keyword = keyword.trim();

    if (!keyword) {
        return res.status(200).json({ message: "No keyword entered", recipes: [] });
    }

    const searchRegex = new RegExp(keyword, 'i');
    const query = {
        $or: [
            { title: { $regex: searchRegex } },
            { "ingredients.name": { $regex: searchRegex } }
        ]
    };

    recipes.find(query)
        .then(response => {
            res.status(200).json({
                message: "Recipes fetched successfully",
                recipes: response
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Error fetching recipes",
                error: err
            });
        });
};

exports.getActiveRecipe =(req, res)=>{
   
    recipes.find({isActive: true}).limit(1).then(response =>{
        res.status(200).json({ message: "Succesfully", recipes: response })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
};

exports.RecipesById = (req, res) => {
    const { _id } = req.body; // ✅ Corrected this line

    recipes.find({ _id: _id })
        .then(response => {
            res.status(200).json({
                message: "Recipes Fetched Successfully",
                recipes: response
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};


