import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

class AddNewLocationMap extends Component {


    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100vw',
                height: '60vh',
                latitude: 19.4326,
                longitude: -99.1332,
                zoom: 11
            },
        };
    }

    render() {
        return(
        <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapboxApiAccessToken='pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA'
            mapStyle="mapbox://styles/mapbox/streets-v11">
            
            <Marker latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} offsetLeft={-6} offsetTop={-20}><FontAwesomeIcon icon={faMapMarker} /></Marker>
        </ReactMapGL>
        )
    }
}


export default AddNewLocationMap;