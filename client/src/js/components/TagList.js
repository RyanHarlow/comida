import React from 'react';
import TagItem from './TagItem';
import './TagList.css';

function TagList(props){
    const tagList = props.tagList.map((tag, i) => {
        return(<TagItem handleTagClick={props.handleTagClick} key={i} index={i} tagText={tag}></TagItem>)
    })

    return(
        <div className='TagList'>
            {tagList}
        </div>
    );
}

export default TagList;