import React from 'react';
import eat from '../res/eat.svg';
import explore from '../res/explore.svg';
import rating from '../res/rating.svg';
import './LandingPage.css'

export default function LandingPage(props) {
    return (
        <div class='LandingPage' style={{/*backgroundImage: `url("/food-tray.jpeg")`*/}}>
        <section class="hero intro" style={{/* marginTop: '4rem' */}}>
            <div class="hero-body">
                <div class="container">
                    <div className='intro-columns columns is-vcentered' >
                        <div className='intro-column column' style={{textAlign: 'center'}}>
                            <div className='intro-content'style={{textAlign: 'center'}}>
                                <h1 className='title intro-title intro-hero' style={{margin: '0 auto', width: '70%'}}>
                                    Comida en La Calle is your one stop shop for finding new street food, writing reviews, and exploring new cuisine
                  </h1>
                            </div>
                        </div>
                        {/* <div className='intro-column column'>
                            <img src={eating} alt="image of people eating" />
                        </div> */}
                    </div>
                </div>
            </div>
            </section>
            <section style={{marginTop: '3rem'}} class='container'>
            <div class='info-cards columns'>
                <div class="card column" style={{margin: '2rem 3rem 0'}}>
                    <div class="card-image">
                        <figure class="image">
                            <img src={rating} style={{height: '8rem'}} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">RATE</p>
                            </div>
                        </div>

                        <div class="content">
                            Give ratings and write reviews for the food you eat.
    </div>
                    </div>
                </div>
                <div class="card column" style={{margin: '2rem 3rem 0'}}>
                    <div class="card-image">
                        <figure class="image">
                            <img style={{height: '8rem'}} src={eat} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">EAT</p>
                            </div>
                        </div>

                        <div class="content">
                            Find new foods and vendors
    </div>
                    </div>
                </div>
                <div class="card column" style={{margin: '2rem 3rem 0'}}>
                    <div class="card-image">
                        <figure class="image">
                            <img style={{height: '8rem'}} src={explore} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">EXPLORE</p>
                            </div>
                        </div>

                        <div class="content">
                            Explore the city with the knowledge of where to find top knotch street food
    </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}