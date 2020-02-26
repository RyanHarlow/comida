import React from 'react';
import StarDisplay from './StarDisplay';
import './ReviewItem.css'
import {Link} from 'react-router-dom';

function ReviewItem(props){

    return(

<div className="card ReviewItem">
  <header className="card-header">
    <div className="card-header-title">
      <Link to={`/profile/${props.userId}`}>{props.username}</Link>
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