import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

function Stand(props){
    let {id} = useParams();
    return(
        <div>
            Stand Route for id {id}
        </div>
    )
}

export default Stand;