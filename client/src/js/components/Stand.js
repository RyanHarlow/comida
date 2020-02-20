import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import StandMap from './StandMap';
import axios from 'axios';

function Stand(props){
    let {id} = useParams();
    let [place, setPlace] = useState(null);

    useEffect(() => {
        axios.get(`/api/places/${id}`)
        .then(res => {
            setPlace(res.data);
            console.log(place);
        }).catch(err => {
            console.log(err);
        })
    }, []); 

    return(
        <div className={Stand}>
            <StandMap />
        </div>
    )
}

export default Stand;