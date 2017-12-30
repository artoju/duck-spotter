import React, { Component } from 'react';
import SightingList from './SightingList';
import Adder from './Adder';
import duck from '../duck.svg';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="jumbotron">
       <h1>Duck Spotter</h1>
        <p>Go do some duckwatching and add your sightings here.</p>
       </div>
        <img src={duck} className="duck" alt="duck" />
        <legend>Add a sighting</legend>
        <Adder/>
        <legend>Sightings</legend>
        <SightingList/>
      </div>
    );
  }
}

export default App;
