import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile(props) {
    let { id } = useParams();
    const [page, setPage] = useState[1];
    const [username, setUsername] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`/api/review/user/${id}/?page=${page}`)
    },[])

    return (
        <div>
            <section class="hero">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Primary title
                        </h1>
                        <h2 class="subtitle">
                            Primary subtitle
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile;