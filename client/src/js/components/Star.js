import React from 'react';

const Star = (props) => {
    if(props.highlighted){
        return(
            <div onClick={props.handleClick} style={{color: 'yellow', display: 'inline', margin: 0, cursor: 'pointer' }}>
            ★
            </div>
        )
    }else{
        return(
                <div onClick={props.handleClick} style={{color: 'gray', display: 'inline', margin: 0, cursor: 'pointer' }}>
                ★
                </div>
        )
    }
}

export default Star;