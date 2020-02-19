import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AddNewLocationMap from './AddNewLocationMap';
import AddNewLocationForm from './AddNewLocationForm';
import './AddNewLocation.css';
import axios from 'axios'


const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
};


function AddNewLocation(props) {

    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');

    const handleSubmit = () => {
        const data = {name, tags, rating, review}
        axios.post('/api/places', data)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    if (!props.isLoggedIn) {
        return (<Redirect to="/" />)
    }
    else {
        return (
            <div className={'AddNewLocation'}>
                <AddNewLocationMap />
                <AddNewLocationForm
                    name={name}
                    setName={setName}
                    tags={tags}
                    setTags={setTags}
                    rating={rating}
                    setRating={setRating}
                    review={review}
                    setReview={setReview}
                    handleSubmit={handleSubmit} />
            </div>
        )

    }
}

export default connect(mapStateToProps)(AddNewLocation);