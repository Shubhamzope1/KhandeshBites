import React from 'react';
import '../Style/home.css';


class Quick extends React.Component {
    constructor() {
        super();
        this.state = {
            

        }

    }

    render() {
        const { recipesData } = this.props;
        return (
            <div className='container-fluid widthbox'>

                <div className='row svg-ts'><span className='text'>Today's Special</span></div>
                {recipesData && recipesData.length > 0 ? (
                    recipesData.map((item,index)=>(
                        <div className='row  tpcontainer' >
                        <div className=' col-xl-8 col-md-6 col-sm-12  leftside' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">

                            <div className='row g-0 container'>
                                <div className=' col-xl-4 col-md-6 col-sm-12  img-grid'>
                                    <img className='sp-img' src={item.image} alt="Sorry for the Inconvinience" />
                                </div>
                                <div className=' col-xl-8 col-md-6 col-sm-12 container sprect-main '>
                                    <div className='sprect'>
                                        <div className='centered-container'><div className='reptitle'>{item.title}</div> </div>
                                        <div className='discription'>{item.short_description}</div>
                                    </div>
                                </div>
                                <div className='row container-fluid g-0 sprect-main'>
                                    <div className='container-fluid g-0 cook-div '>
                                        <div className='cook-text'>Cooking Process: </div>
                                        <div className="cook-discription container">
                                            <ol className='container'>
                                                {item.cooking_process && item.cooking_process.map((step, index) => (
                                                    <li key={index} className='container'>{step} </li>
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
                        <div className=' col-xl-4 col-md-6 col-sm-12 container rightside ' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
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
            </div>
        )
    }
}
export default Quick;