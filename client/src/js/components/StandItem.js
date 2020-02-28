import React from 'react';
import {Link} from 'react-router-dom'
import StarDisplay from './StarDisplay'
import './StandItem.css'

function StandItem(props){

    return( 
        
            <div className="card StandItem">
  <header className="card-header">
    <div className="card-header-title">
        <Link to={`/stand/${props.id}`}>{props.name}</Link>
    </div>
    <div className='ReviewItemStarDisplay'>
     <StarDisplay rating={props.rating} />
    </div>
  </header>
  
</div>

      
    )
}

export default StandItem;