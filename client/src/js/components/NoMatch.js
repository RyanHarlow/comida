import React from 'react';
import {Link} from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch(props){
    return(
    <div class='NoMatch'>
        <h1 className='title is-1'>404 :(</h1>
        <h3 className='title is-2'>Looks like we hit a snag</h3>
        <Link to='/'>Take Me Home</Link>
    </div>
    )
}