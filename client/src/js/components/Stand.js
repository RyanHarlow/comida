import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Stand(props){
    let {id} = useParams();

    useEffect(() => {
        
    }, []); 

    return(
        <div>
            Stand Route for id {id}
        </div>
    )
}

export default Stand;