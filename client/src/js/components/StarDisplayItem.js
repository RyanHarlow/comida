import React from 'react';

const StarDisplayItem = (props) => {
    if (props.highlighted) {
        return (
            <span style={{ color: 'orange' }}>
                ★
        </span>
        );
    } else {
        return (
            <span>
                ★
            </span>
        );
    }
}

export default StarDisplayItem