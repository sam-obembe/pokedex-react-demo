/////////////////////////////
//// CREATED BY LARRY LI ////
/////////////////////////////

// DEPENDENCIES
import React, { Component } from "react";
// CHILD COMPONENTS
import Header from "./Components/Header/Header";
import Pokedex from "./Components/Pokedex/Pokedex";
// STYLING
import "./App.css";

// CLASS COMPONENT
class App extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      owner: "Larry"
    };
  }
  // RENDER APP
  render() {
    const { owner } = this.state;
    return (
      <div className="App">
        <Header name={owner} />
        <Pokedex />
      </div>
    );
  }
}

export default App;
