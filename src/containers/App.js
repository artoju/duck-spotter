import React, { Component } from 'react';
import SightingList from './SightingList';
import Adder from './Adder';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>DuckWatcher</h1>
        <Adder/>
        <fieldset>
        <legend>Sightings</legend>
        <SightingList/>
        </fieldset>
      </div>
    );
  }
}

export default App;
