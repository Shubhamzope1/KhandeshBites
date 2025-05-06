import React from 'react';
import '../Style/rescipe.css';
import queryString from 'query-string';
import axios from 'axios';

class filteredrecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []

        }
    }
  
    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const {category_id} = qs; 
        const filterobj ={
            recipetype : category_id

        }
        axios({
            url: `${process.env.REACT_APP_API_URL}/filter`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: filterobj
        })
            .then(response => {
                this.setState({ recipes: response.data.recipes})
            })
            .catch()
    }
    handleNavigate = (by_id) => {
        this.props.history.push(`/details?by_id=${by_id}`);
        console.log("Navigating to:", `/details?by_id=${by_id}`);
    };
    
    render() {
        const { recipes } = this.state;
        return (
            <div className='main'>
                <div className='remainsrect'>
                    <div className='titleRes'>Recipes</div>
                    <div className='textRes'>“Savour the authentic taste of Khandesh, where every bite tells a story.”</div>
                </div>
              

                <div className='row g-0 container-fluid'>
                    {recipes.map((item,index)=>(
                         <div className=' col-xl-6 col-md-6 col-sm-12  leftside' onClick={() => this.handleNavigate(item._id)} key={item._id}>

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
export default filteredrecipes;