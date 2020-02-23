import React from 'react';
import StarDisplay from './StarDisplay';
import './ReviewItem.css'

function ReviewItem(props){

    return(

<div className="card ReviewItem">
  <header className="card-header">
    <div className="card-header-title">
      {props.username}
    </div>
    <div className='ReviewItemStarDisplay'>
    <StarDisplay rating={props.stars} />
    </div>
  </header>
  <div className="card-content">
    <div className="content">
    <time>{props.date.substring(0,10)}</time>
    <br />
        {props.text}
    </div>
  </div>
</div>

    )
}

export default ReviewItem;