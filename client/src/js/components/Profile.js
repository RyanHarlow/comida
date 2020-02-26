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
            username={review.username}
            profilephoto={review.profile_photo}
        />
        )
    })

    useEffect(() => {
        axios.get(`/api/review/user/${id}/?page=${page}`)
        .then(res => {
            console.log(res.data.success)
            setUsername(res.data.success[0].username)
            setReviews([...reviews, ...res.data.success])
        }).catch(err => {
            console.log(err)
        })
    },[page])

    return (
        <div>
            <section class="hero">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            {username}
                        </h1>
                        <h2 class="subtitle">
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