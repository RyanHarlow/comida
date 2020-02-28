import React, {useEffect} from 'react';
import queryString from 'query-string'
import axios from 'axios';

function Search(props){
    const query = queryString.parse(props.location.search).search;

    useEffect(() => {
        axios.get(`/api/places/search/?search=${query}`)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },[])
    
    return(
        <div>
            this is the search route
        </div>
    )
}

export default Search;