import React from 'react';
import eat from '../../res/eat.svg';
import explore from '../../res/explore.svg';
import rating from '../../res/rating.svg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './LandingPage.css'

const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
};


function LandingPage(props) {


    

    let buttons = null;
    if (!props.isLoggedIn) {
    buttons = (
        <div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Link to='/map'><button className='button is-link'>Explore Now</button></Link>
    
                            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', color: 'white' }}>
                <p>Signup or login to add Location</p>
            </div>
            </div>
        )
    }else{
        buttons = (
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link to='/map'><button style={{margin: '2rem'}} className='button is-link'>Explore Now</button></Link>
                            <Link to='/add'><button style={{margin: '2rem'}} className='button is-link'>Add Location</button></Link>
                        </div>
            

        )
    }



    return (
        <div className='LandingPage' style={{/*backgroundImage: `url("/food-tray.jpeg")`*/ }}>
            <section className="hero intro" style={{/* marginTop: '4rem' */ }}>
                <div className="hero-body">
                    <div className="container">
                        <div className='intro-columns columns is-vcentered' >
                            <div className='intro-column column' style={{ textAlign: 'center' }}>
                                <div className='intro-content' style={{ textAlign: 'center' }}>
                                    <h1 className='title intro-title intro-hero' style={{ margin: '0 auto', width: '70%' }}>
                                        Comida en La Calle is your one stop shop for finding new street food, writing reviews, and exploring new cuisine
                  </h1>
                                </div>
                            </div>

                        </div>
                        
                        {buttons}
                    </div>
                </div>
            </section>
            <section style={{ marginTop: '3rem' }} className='info-card-container container'>
                <div className='info-cards columns'>
                    <div className="card column" style={{ margin: '2rem 3rem 0' }}>
                        <div className="card-image">
                            <figure className="image">
                                <img src={rating} style={{ height: '8rem' }} alt="five star" />
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
                    <div className="card column" style={{ margin: '2rem 3rem 0' }}>
                        <div className="card-image">
                            <figure className="image">
                                <img style={{ height: '8rem' }} src={eat} alt="Eating" />
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
                    <div className="card column" style={{ margin: '2rem 3rem 0' }}>
                        <div className="card-image">
                            <figure className="image">
                                <img style={{ height: '8rem' }} src={explore} alt="Exploring" />
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


export default connect(mapStateToProps)(LandingPage);
