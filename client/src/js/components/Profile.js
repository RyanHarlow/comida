import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile(props) {
    let { id } = useParams();

    useEffect(() => {
        axios.get(`/api/review/user/${id}`)
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