const recipes = require('../models/recipes');

exports.filterRecipes = (req, res) => {
    const { recipetype } = req.body; // ✅ Corrected this line

    recipes.find({ category_id: recipetype })
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
