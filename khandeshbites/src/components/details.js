import React from 'react';
import '../Style/home.css';
import queryString from 'query-string';
import axios from 'axios';

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: [],

        }

    }
    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const {by_id} = qs; 
        const filterobj ={
            _id : by_id

        }
        axios({
            url: `${process.env.REACT_APP_API_URL}/byId`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterobj
        })
            .then(response => {
                this.setState({ recipes: response.data.recipes})
                console.log(response.data.recipes)
            })
            .catch()

    }
    render() {
        const { recipes } = this.state;
        return (
            <>

                <div className='row svg-ts'><span className='text'>Tummy Time</span></div>
                {recipes && recipes.length > 0 ? (
                    recipes.map((item,index)=>(
                        <div className='row  tpcontainer'>
                        <div className=' col-xl-8 col-md-6 col-sm-12  leftside'>

                            <div className='row'>
                                <div className=' col-xl-4 col-md-6 col-sm-12  img-grid'>
                                    <img className='sp-img' src={item.image} alt="Sorry for the Inconvinience" />
                                </div>
                                <div className=' col-xl-8 col-md-6 col-sm-12 container sprect-main '>
                                    <div className='sprect'>
                                        <div className='centered-container'><div className='reptitle'>{item.title}</div> </div>
                                        <div className='discription'>{item.short_description}</div>
                                    </div>
                                </div>
                                <div className='row container sprect-main'>
                                    <div className='cook-div '>
                                        <div className='cook-text'>Cooking Process: </div>
                                        <div className="cook-discription container">
                                            <ol>
                                                {item.cooking_process && item.cooking_process.map((step, index) => (
                                                    <li key={index}>{step}</li>
                                                ))}
                                            </ol>

                                        </div>

                                    </div>
                                    <div className='cook-rect container'>
                                        <div className='start-container'><div className='ingredients'>Tips</div></div>
                                        <div className='centered-container'>
                                            <div className='discription-tips container '>
                                                {item.tips && item.tips.map((tip, index) => (
                                                    <li key={index}>{tip}</li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className=' col-xl-4 col-md-6 col-sm-12 container-fluid rightside '>
                            <div className='vertical-line '>
                                <div className='centered-container'><div className='ingredients'>Ingredients</div></div>
                                <div className='centered-container '>
                                    <div className='discription-b container'>
                                        {item.ingredients && item.ingredients.length > 0 ?(
                                        <ul>
                                            {item.ingredients.map((ing, index) => (
                                                <li key={index}>{ing.name}: {ing.description}</li>
                                            ))}

                                        </ul>) : null}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='vertical-rect mt-5'>
                                <div className='centered-container'><div className='ingredients'>Fun & Fact</div></div>
                                <div className='centered-container'>
                                    <div className='discription-fun container'>
                                        {item.funfact && item.funfact.join(', ')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    ))
                    
                ) : (
                    <div style={{ padding: '2rem' }}>Loading today's special...</div>
                )}
            </>
        )
    }
}
export default Details;