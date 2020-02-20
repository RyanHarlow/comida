import React, {Component} from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import Pins from './Pins';
import {Link} from 'react-router-dom';


class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
              width: '100vw',
              height: '90vh',
              latitude: 19.4326,
              longitude: -99.1332,
              zoom: 11
            },
            markers: [],
            popup: null,
            rating: null
          };
          this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }


    componentDidMount(){
        axios.get('/api/places')
        .then((res) => {
            let markers = [];
            res.data.forEach(element => markers.push(element));
            this.setState({markers})
        }).catch((err) => {
            console.log(err);
        })
    }

    handleMarkerClick(markerId){
      let rating = null;
      axios.get(`/api/review/stars/${this.state.markers[markerId].id}`)
      .then(res => {
        rating = res.data.rating;
        this.setState((st) => {
          return({
              ...st,
              popup: st.markers[markerId],
              rating: rating
          }
          )
      })
      }).catch(err => {
        console.log(err);
      })

        
    }

    _renderPopup() {
        const {popup} = this.state;
        

        return (
          popup && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popup.long}
              latitude={popup.lat}
              closeOnClick={false}
              onClose={() => this.setState({popup: null})}
            >
              <Link to={`/stand/${popup.id}`}>{popup.name}</Link>
              <div>
              rating: {this.state.rating} stars
              </div>
            </Popup>
          )
        );
      }

  render() {  
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken='pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA'
        mapStyle="mapbox://styles/mapbox/streets-v11">
            <Pins data={this.state.markers} onClick={this.handleMarkerClick} />
            {this._renderPopup()}
        </ReactMapGL>
    );
  }
}

export default Map;