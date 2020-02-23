import React from 'react';
import Star from './Star';

const StarSelector = ({rating, handleChange}) => {


    let stars = [];

    function handleClick(value){
        handleChange(value)
    }

    for(let i = 0; i < 5; i++){
        if(i < rating){
            stars.push(<Star key={i} handleClick={() => handleClick(i+1)} highlighted/>)
        }
        else{
            stars.push(<Star key={i} handleClick={() => handleClick(i+1)} />)
        }
    }

    return(
        <div style={{fontSize:'36px'}}>
            {stars}
        </div>
    )
}

export default StarSelector;