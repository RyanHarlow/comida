import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewLocationMap from './AddNewLocationMap';
import AddNewLocationForm from './AddNewLocationForm';
import './AddNewLocation.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
};


function AddNewLocation(props) {
    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [coor, setCoor] = useState([19.4326, -99.1332])
    const [error, setError] = useState('');


    const handleSubmit = () => {
        const data = {
            name,
            tags,
            rating,
            reviewText: review,
            lat: coor[0],
            long: coor[1]
        }
        axios.post('/api/places', data)
            .then(res => {
                console.log(props)
                if(res.data.success){
                    props.history.push('/map');
                }else if(res.data.err){
                    setError(res.data.err);
                }
            }).catch(err => {
                console.log(err);
            })

    }

    if (!props.isLoggedIn) {
        props.setLoginModalOpen(true);
        return (<Redirect to="/" />)
    }
    else {
        return (
            <div className={'AddNewLocation'}>
                <AddNewLocationMap coor={coor} setCoor={setCoor} />
                <AddNewLocationForm
                    name={name}
                    setName={setName}
                    tags={tags}
                    setTags={setTags}
                    rating={rating}
                    setRating={setRating}
                    review={review}
                    setReview={setReview}
                    handleSubmit={handleSubmit}
                    error={error} />
            </div>
        )

    }
}

export default withRouter(connect(mapStateToProps)(AddNewLocation));