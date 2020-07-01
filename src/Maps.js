import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker,  } from 'google-maps-react';
import LocationMarker from './GoogleMapsLocationMarker'
import marker from './GoogleMapsLocation'
import Demo from './GeoLocater'

class MapContainer extends Component{

  render() {

    console.log(this.props.coords ? this.props.coords : "Loading")
    return this.props.coords ? (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: this.props.coords.latitude, lng: this.props.coords.longitude}}
        marker={LocationMarker}
      />


    ) : (
  <p>Loading</p>
)

  }
}


const mapStyles = {
  width: '60%',
  height: '60%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4ptxykIrVF6XObc_SdmqXm9vOW9QcRpI'
})(MapContainer);
