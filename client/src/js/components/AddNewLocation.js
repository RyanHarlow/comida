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
    const [tagInput, setTagInput] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [coor, setCoor] = useState([19.4326, -99.1332])
    const [error, setError] = useState('');
    const [tagList, setTagList] = useState([]);

    if(tagInput[tagInput.length-1] === ' '){
        let tagItem = tagInput.substring(0, tagInput.length);
        setTagList([...tagList, tagItem])
        setTagInput('')
    }

    const handleTagClick = (i) => {
        console.log(i)
        setTagList([...tagList.slice(0, i), ...tagList.slice(i+1)]);
    }

    const handleSubmit = () => {
        const data = {
            name,
            tagInput,
            rating,
            reviewText: review,
            lat: coor[0],
            long: coor[1]
        }
        axios.post('/api/places', data)
            .then(res => {
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
                    tagInput={tagInput}
                    setTagInput={setTagInput}
                    tagList={tagList}
                    handleTagClick={handleTagClick}
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