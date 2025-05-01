import React from 'react';
import '../Style/home.css';
import axios from 'axios';
import Wallpaper from './wallpaper';
import Quick from './quick';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            recipes: [],
            allrecipes:[],
        }
    }
    componentDidMount() {
        //all Categorise
        axios({
            url: 'http://localhost:2001/categories',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ categories: respone.data.categories })
                console.log(respone.categories)
            })
            .catch()
// Active Recipes
        axios({
            url: 'http://localhost:2001/isActive',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ recipes: response.data.recipes })
                console.log(response.data.recipes)
            })
            .catch()
//All recipes
        axios({
            url: 'http://localhost:2001/recipes',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ allrecipes: respone.data.recipes })
                
            })
            .catch()



    }
    render() {
        const { categories, recipes, allrecipes } = this.state;

        return (
            <div>
                <Wallpaper categoriesData={categories} allrecipesData={allrecipes}  />
                <Quick recipesData={recipes} />

            </div>
        )
    }
}
export default Home;