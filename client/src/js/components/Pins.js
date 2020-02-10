 
import React, {PureComponent} from 'react';
import {Marker} from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default class Pins extends PureComponent{

    render(){
        const {data, onClick} = this.props;
        return data.map((el, i) => {
            return(
                <Marker key={el.id} latitude={el.lat} longitude={el.long} offsetLeft={-6} offsetTop={-20}><FontAwesomeIcon onClick={() => onClick(i)} icon={faMapMarker} /></Marker>
            )
        })
    }
}