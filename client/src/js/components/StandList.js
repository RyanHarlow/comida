import React from 'react';
import StandItem from './StandItem';

function StandList(props){

    const stands = props.stands.map(stand => {
        return(
            <StandItem key={stand.id} name={stand.name} rating={stand.rating} id={stand.id} />
        )
    })


    return(
        <div>
            {stands}
            <hr/>
        </div>
    )
}

export default StandList