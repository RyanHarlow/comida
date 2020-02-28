import React, {useEffect, useState} from 'react';
import queryString from 'query-string'
import axios from 'axios';
import StandList from './StandList';
import './Search.css'

function Search(props){

    const [searchResults, setSearchResults] = useState([]);

    console.log(searchResults)

    const query = queryString.parse(props.location.search).search;

    useEffect(() => {
        axios.get(`/api/places/search/?search=${query}`)
        .then(res => {
            setSearchResults(res.data.success);
        }).catch(err => {
            console.log(err)
        })
        
    },[query])

    
    return(
        <div className={'Search'}>
            <h1 className="title">Results</h1>

            <StandList stands={searchResults}/>
        </div>
    )
}

export default Search;