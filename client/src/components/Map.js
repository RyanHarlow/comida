import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
              width: '90wh',
              height: '90vh',
              latitude: 19.4326,
              longitude: -99.1332,
              zoom: 11
            }
          };
    }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken='pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA'
        mapStyle="mapbox://styles/mapbox/streets-v11"
        />
    );
  }
}

export default Map