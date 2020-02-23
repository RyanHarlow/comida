import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StandMap from './StandMap';
import axios from 'axios';
import StarDisplay from './StarDisplay';
import ReviewItem from './ReviewItem';

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
        />
        )
    })
    
    return (
        <div className={'Stand'}>
            <StandMap longitude={place.long} latitude={place.lat} />
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {place.name}
      </h1>
                        <h2 className="subtitle">
                            <StarDisplay rating={rating} />
      </h2>
      {reviewList}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stand;