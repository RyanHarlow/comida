import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StandMap from './StandMap';
import axios from 'axios';
import StarDisplay from './StarDisplay';
import ReviewItem from './ReviewItem';
import AddReview from './AddReview';


function Stand(props) {
    let { id } = useParams();
    let [place, setPlace] = useState({ lat: 19.4326, long: -99.1332 });
    let [rating, setRating] = useState(0)
    let [reviews, setReviews] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`/api/places/${id}`)
            .then(res => {
                setPlace(res.data.success);
            }).catch(err => {
                console.log(err);
            })

        axios.get(`/api/review/stars/${id}`)
        .then(res => {
            setRating(res.data.rating)
        }).catch(err => {
            console.log(err);
        })

        getReviews();

    }, []);

    useEffect(() => {
        getReviews();
    }, [page])



    const getReviews = () => {
        axios.get(`/api/review/${id}/?page=${page}`)
        .then(res => {
            setReviews([...reviews, ...res.data.success])
        }).catch(err => {
            console.log(err)
        })

    }

    let reviewList = reviews.map((review) => {
        return(
        <ReviewItem 
            key={review.r_id} 
            stars={review.r_stars}
            text={review.r_text}
            date={review.r_date}
            username={review.username}
            profilephoto={review.profile_photo}
            userId ={review.p_id}
        />
        )
    })
    
    return (
        <div className={'Stand'}>
            <StandMap longitude={place.long} latitude={place.lat} />
            <section className="hero">
                <div style={{paddingBottom:'10px'}} className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {place.name}
      </h1>
                        <h2 className="subtitle">
                            <StarDisplay rating={rating} />
      </h2>
      <AddReview id={id}/>
      {reviewList}
                    </div>
                </div>
            </section>
            <div style={{width: '100%', textAlign:'center', marginBottom:'10px'}}>
            <button onClick={() => {setPage(page+1)}} className='button is-info'>Load More</button>
            </div>
        </div>
    )
}

export default Stand;
