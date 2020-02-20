import React from 'react';
import StarDisplayItem from './StarDisplayItem';

const StarDisplay = (props) => {

    let stars = [];
    for(let i = 0; i < 5; i++){
        if(i < props.rating){
            stars.push(<StarDisplayItem key={i} highlighted/>)
        }else{
            stars.push(<StarDisplayItem key={i} />)
        }
    }
    
    return(
        <div>
            {stars}
        </div>
    )
}

export default StarDisplay;