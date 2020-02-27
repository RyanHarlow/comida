import React from 'react';
import './TagItem.css';

function TagItem(props){
    return(
    <span onClick={() => props.handleTagClick(props.index)} className={'TagItem'}>{props.tagText}</span>
    )
}

export default TagItem;