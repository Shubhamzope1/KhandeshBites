import React from 'react';
import '../Style/about.css';


class About extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='main'>
                <div className='abrect'>
                    <div className='titleAbo'>ABOUT Me</div>
                    <div className='textRes'>"Spicing Up Your Kitchen, One YummyTummy at a Time!"</div>
                </div>
                <div className='row g-0 container-fluid'>
                    <div className='col-xl-8 col-md-8 col-sm-6 g-0 category-div container-fluid'>
                        <div className='cook-text'>About Khandeshi Bites:</div>
                        <div className='about-discription container'>
                            Welcome to Khandeshi Bites, your ultimate destination for authentic and delicious recipes from the heart of Maharashtra, with a special focus on the rich culinary traditions of the Khandesh region. Our goal is to bring the flavors of this culturally diverse and vibrant region to your kitchen.<br /><br />

                            At Khandeshi Bites, we celebrate the simplicity, comfort, and rustic charm of traditional recipes that have been passed down through generations. From hearty Pithla Bhakri, the iconic "farmer's meal," to sweet treats and savory delights, we offer a variety of recipes that capture the essence of Khandeshi cuisine.<br /><br />

                            Our collection is not just about ingredients and cooking processes — we dive deeper to share fun facts, cultural insights, and seasonal specials, giving you a taste of the stories behind each dish. Whether you are a food enthusiast or a seasoned cook, you'll find something special here that will bring the flavors of Maharashtra to your home.
                        </div>
                        <div className='cook-text'>What We Offer:</div>
                        <div className='about-discription container '>
                            <b>Authentic Recipes:</b> Explore the traditional dishes of Khandesh and Maharashtra with step-by-step cooking instructions.<br />
                            <b>Fun Facts:</b> Learn interesting trivia and historical tidbits about the dishes you love.<br />
                            <b>Seasonal Specials:</b> Discover dishes that celebrate the flavors of the season, widely enjoyed during festivals and special occasions.
                        </div>

                    </div>

                    <div className='col-xl-4 col-md-4 col-sm-6'>
                        <div className='row abt-vl'><div className='centered-container'><div className='ingredients'>About Me</div></div>
                            <div className='centered-container mt-5 mb-5'>
                                <div className='me-img'>
                                    <img className='me-img' src='./Assets/Vector.png' alt="Sorry for the Inconvinience" height="100%" width="100%" />
                                </div>
                                <div className='kb-discription container'>Hi, I’m KhandeshBites, the creator of Khandeshi Bites. Passionate about food as a story and connection, I grew up in Khandesh and developed a love for Maharashtra’s diverse flavors.<br />

                                    Through Khandeshi Bites, I share authentic recipes, cultural insights, and seasonal specials, offering something for both seasoned cooks and beginners. Join me in celebrating the rich culinary traditions of Khandesh and Maharashtra — it’s not just a recipe collection, but a celebration of food, culture, and community.</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default About;