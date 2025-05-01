    const express = require('express');
    const route = express.Router();

    const categoriescontroller = require('../controllers/categories');
    const recipescontroller = require('../controllers/recipes');
    const filtercontroller = require('../controllers/filter')
    const admincontroller = require('../controllers/admin')
    route.get('/categories', categoriescontroller.getcategories);
    route.get('/recipes', recipescontroller.getrecipes);
    route.get('/search', recipescontroller.getsearch);

    route.get('/isActive', recipescontroller.getActiveRecipe);
    route.post('/byId', recipescontroller.RecipesById);
    route.post('/filter', filtercontroller.filterRecipes);
    route.post('/admin-login', admincontroller.postlogin)
    route.get('/admin', admincontroller.getAdmin)
 

    module.exports = route;