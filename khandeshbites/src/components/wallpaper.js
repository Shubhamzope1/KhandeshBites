import React from 'react';
import '../Style/home.css';
import { withRouter } from 'react-router-dom';
import '../Style/Header.css';
class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            suggestions: []
        };
    }

    handleNavigate = (category_id) => {
        this.props.history.push(`/filteredrecipes?category_id=${category_id}`);
    };

    handleInput = (event) => {
        const { allrecipesData } = this.props;  // <-- Correct
        const searchField = event.target.value;

        let searchrest = [];

        if (searchField) {
            searchrest = allrecipesData.filter((item) =>
                item.title.toLowerCase().includes(searchField.toLowerCase())
            );
        }

        this.setState({ suggestions: searchrest, searchField });
    }

    selectedText = (by_id) => {
        this.props.history.push(`/details?by_id=${by_id}`);
    }

    renderSuggestions = () => {
        const { suggestions } = this.state;

        if (suggestions.length === 0) return null;

        return (
            <ul className="list-lab container">
                {suggestions.map((item, index) => (
                    <li className='searchitem container ' key={index} onClick={() => this.selectedText(item._id)}>
                        <img
                            style={{ borderRadius: '50px', padding: '3px', marginRight: '11px' }}
                            src={`./${item.image}`}
                            alt="No Image"
                            height="50px"
                            width="50px"
                        />
                        {item.title}, <b> King-Ingredient: </b> {item.ingredients[0].name}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { categoriesData } = this.props;
        return (
            <>
                <div className='main-div'>
                    <img className='chef-img ' src="./Assets/chef1.png" alt="No Image"  data-aos="fade-right"/>
                    <div className="search-sect" data-aos="fade-right">
                        <div className='Title' >Feeding Cravings, One Recipe at a Time!</div>
                        <div className='searchbar' id='searchbar'>
                            <input
                                id='search'
                                className='search'
                                placeholder='Search by keyword or key ingredients'
                                onChange={this.handleInput}
                            />
                            <i className="fas fa-search icon-search"></i>


                        </div>
                    </div>
                    <div className='search'>{this.renderSuggestions()}</div>
                </div>

                <div className='container solomain' data-aos="fade-up" data-aos-duration="3000">

                    <div className='row container-fluid  centerd'>
                        {categoriesData && categoriesData.length > 0 ? (
                            categoriesData.map((item) => (
                                <div className='col-xl-2 col-md-2 col-sm-4 container-fluid g-0 solodiv' onClick={() => this.handleNavigate(item._id)} key={item._id} >

                                    < div className='cat-con'>
                                        <div className='svg-hover'></div>
                                        <img className='solo-img' src={`./${item.image}`} alt="No Image" />
                                        <div className='solobite'>{item.name}</div>
                                    </div>

                                </div>
                            ))
                        ) : null}
                    </div>

                </div>
            </>
        )
    }
}

export default withRouter(Wallpaper);
