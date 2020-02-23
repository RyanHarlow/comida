import React from 'react';
import StarDisplay from './StarDisplay';
import './ReviewItem.css'

function ReviewItem(props){

    return(

<div class="card ReviewItem">
  <header class="card-header">
    <div class="card-header-title">
      {props.username}
    </div>
    <div className='ReviewItemStarDisplay'>
    <StarDisplay rating={props.stars} />
    </div>
  </header>
  <div class="card-content">
    <div class="content">
    <time>{Date(props.date).split(' ').slice(0,4).join(' ')}</time>
    <br />
        {props.text}
    </div>
  </div>
</div>

    )
}

export default ReviewItem;