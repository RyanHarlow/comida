import React from 'react';
import StandItem from './StandItem';

function StandList(props){

    let stands = null;
    if(props.stands.length === 0){
        stands = (
            <h2 class="subtitle">No results for your search</h2>
        )
    }else{
    stands = props.stands.map(stand => {
        return(
            <StandItem key={stand.id} name={stand.name} rating={stand.rating} id={stand.id} />
        )
    })
}


    return(
        <div>
            {stands}
            <hr/>
        </div>
    )
}

export default StandList