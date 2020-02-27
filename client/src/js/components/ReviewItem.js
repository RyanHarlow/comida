import React from 'react';
import StarDisplay from './StarDisplay';
import './ReviewItem.css'
import {Link} from 'react-router-dom';

function ReviewItem(props){
  let title;
  if(props.userId){
    title = (<Link to={`/profile/${props.userId}`}>{props.username}</Link>)
  }else if(props.standName){
    title = (<Link to={`/stand/${props.standId}`}>{props.standName}</Link>)
  }

    return(

<div className="card ReviewItem">
  <header className="card-header">
    <div className="card-header-title">
      {title}
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