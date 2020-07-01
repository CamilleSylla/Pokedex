import React, { Component } from 'react';
import PokeList from './Pokelist';
import detailView from './detailView';
import './style/App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={};
  }

  render () {
    return(
      <div className="App">
          <PokeList/>
          <detailView/>
      </div>
    )
  }
}

export default App;