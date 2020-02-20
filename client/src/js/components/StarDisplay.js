import React from 'react';
import StarDisplayItem from './StarDisplayItem';

const StarDisplay = (props) => {

    let stars = [];
    for(let i = 0; i < 5; i++){
        if(i < props.rating){
            stars.push(<StarDisplayItem highlighted/>)
        }else{
            stars.push(<StarDisplayItem />)
        }
    }
    
    return(
        <div>
            {stars}
        </div>
    )
}

export default StarDisplay;