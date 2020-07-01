import React, {Component} from 'react'

export default class GeoLocater extends Component{
  render(){
    return(
      if (hasLocationPermission) {
2
    Geolocation.getCurrentPosition(
3
        (position) => {
4
            console.log(position);
5
        },
6
        (error) => {
7
            // See error code charts below.
8
            console.log(error.code, error.message);
9
        },
10
        {
11
            enableHighAccuracy: true,
12
            timeout: 10000,
13
            maximumAge: 10000
14
        }
15
    );
16
}
    )
  }
}
