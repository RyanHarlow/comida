import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewItem from './ReviewItem';

function Profile(props) {
    let { id } = useParams();
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState('');
    const [reviews, setReviews] = useState([]);


    let reviewList = reviews.map((review) => {
        return(
        <ReviewItem 
            key={review.r_id} 
            stars={review.r_stars}
            text={review.r_text}
            date={review.r_date}
            profilephoto={review.profile_photo}
            standName={review.s_name}
            standId={review.r_stand_id}
        />
        )
    })

    useEffect(() => {
        axios.get(`/api/review/user/${id}/?page=${page}`)
        .then(res => {
            setUsername(res.data.success[0].username)
            setReviews([...reviews, ...res.data.success])
        }).catch(err => {
            console.log(err)
        })
    },[page])

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {username}
                        </h1>
                        <h2 className="subtitle">
                            Reviews
                        </h2>
                        {reviewList}
                        <div style={{width: '100%', textAlign:'center', marginBottom:'10px'}}>
                        <button onClick={() => {setPage(page+1)}} className='button is-info'>Load More</button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Profile;