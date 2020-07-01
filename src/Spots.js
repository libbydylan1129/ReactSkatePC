import React, {Component} from 'react';
import Map from './Maps.js'
import Demo from '../src/GeoLocater.js'

export default class Spots extends Component{
render(){
  return(
    <div>
    <Demo />
    <Map/>
    </div>
  )
}
}
