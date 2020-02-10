import React from 'react';
import eat from '../../res/eat.svg';
import explore from '../../res/explore.svg';
import rating from '../../res/rating.svg';
import './LandingPage.css'

export default function LandingPage(props) {
    return (
        <div className='LandingPage' style={{/*backgroundImage: `url("/food-tray.jpeg")`*/}}>
        <section className="hero intro" style={{/* marginTop: '4rem' */}}>
            <div className="hero-body">
                <div className="container">
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
            <section style={{marginTop: '3rem'}} className='container'>
            <div className='info-cards columns'>
                <div className="card column" style={{margin: '2rem 3rem 0'}}>
                    <div className="card-image">
                        <figure className="image">
                            <img src={rating} style={{height: '8rem'}} alt="five star" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">RATE</p>
                            </div>
                        </div>

                        <div className="content">
                            Give ratings and write reviews for the food you eat.
    </div>
                    </div>
                </div>
                <div className="card column" style={{margin: '2rem 3rem 0'}}>
                    <div className="card-image">
                        <figure className="image">
                            <img style={{height: '8rem'}} src={eat} alt="Eating" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">EAT</p>
                            </div>
                        </div>

                        <div className="content">
                            Find new foods and vendors
    </div>
                    </div>
                </div>
                <div className="card column" style={{margin: '2rem 3rem 0'}}>
                    <div className="card-image">
                        <figure className="image">
                            <img style={{height: '8rem'}} src={explore} alt="Exploring" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">EXPLORE</p>
                            </div>
                        </div>

                        <div className="content">
                            Explore the city with the knowledge of where to find top knotch street food
    </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}