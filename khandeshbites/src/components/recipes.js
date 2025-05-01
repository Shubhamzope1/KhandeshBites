import React from 'react';

import '../Style/rescipe.css';

import axios from 'axios';

class recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }

   

    componentDidMount() {
             axios({
                 url: 'http://localhost:2001/recipes',
                 method: 'GET',
                 headers: { 'Content-Type': 'application/json' }
             })
                 .then(respone => {
                     this.setState({ recipes: respone.data.recipes })
                     console.log(respone.recipes)
                 })
                 .catch()
    
    
    
    
        }
        handleNavigate = (by_id) => {
            this.props.history.push(`/details?by_id=${by_id}`);
            console.log("Navigating to:", `/details?by_id=${by_id}`);
        };
    
    render() {
       
        return (
            <div className='main'>
                <div className='remainsrect'>
                    <div className='titleRes'>Recipes</div>
                    <div className='textRes'>“Savour the authentic taste of Khandesh, where every bite tells a story.”</div>
                </div>
                <div className='searchbar-res'>
                    <i className="fas fa-search icon-search"></i>
                    <input className='search' placeholder='Search By keyword   or   By Key Ingredients ?'></input>
                </div>

                {/* <div className='row cat-vertical-line'>
                    <div className='centered-container'><div className='ingredients'>Categories</div>
                    </div>
                    <div className='row g-0 catdiv-center'>
                        <div className=' cat-div '>

                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="50%" width="50%" />
                            <div className='catbite'>Solo Bite</div>
                        </div>
                        <div className='cat-div'>

                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="100%" width="100%" />
                            <div className='catbite'>Bhaji Bites </div>

                        </div>
                        <div className=' cat-div'>
                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="50%" width="50%" />
                            <div className='catbite'>Condiments</div>

                        </div>
                        <div className='  cat-div'>

                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="100%" width="100%" />
                            <div className='catbite'>Fermenta </div>

                        </div>
                        <div className='  cat-div'>

                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="50%" width="50%" />
                            <div className='catbite'>Beverages</div>

                        </div>
                        <div className=' cat-div'>

                            <img className='cat-img' src='./Assets/curry.jpg' alt="Sorry for the Inconvinience" height="100%" width="100%" />
                            <div className='catbite'>Dessert </div>

                        </div>

                    </div>


                </div> */}

                <div className='row g-0 container-fluid'>
                    {this.state.recipes.map((item,index)=>(
                         <div className=' col-xl-8 col-md-6 col-sm-12  leftside-r' onClick={() => this.handleNavigate(item._id)} key={item._id}>

                         <div className='imgcont'>
                             <img className='resimg' src={`./${item.image}`} alt="Sorry for the Inconvinience" />
                         </div>
 
 
                         <div className='resprect'>
                             <div className='restitle'>{item.title}</div>
                             <div className='container res-discription '>{item.short_description}</div>
 
                         </div>
                     </div>
                    ))}
                   
                </div>

            </div>
        )
    }
}
export default recipes;