// DEPENDENCIES
import React, { Component } from "react";
// STYLING
import "./Pokemon.css";

// CLASS COMPONENT
class Pokemon extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      caught: false,
      level: 1
    };
  }
  // CATCH POKEMON
  catch() {
    this.setState({ caught: true });
  }
  // RELEASE POKEMON
  release() {
    this.setState({ caught: false, level: 1 });
  }
  // LEVEL UP POKEMON
  levelUp() {
    const { level: currentLevel } = this.state;
    this.setState({ level: currentLevel + 1 });
  }
  // RENDER POKEMON
  render() {
    const { name } = this.props;
    const { level, caught } = this.state;
    return (
      <div className="pokemon">
        <h4 className="name">Name: {name}</h4>
        <div className="info">
          <h5>Lvl. {level}</h5>
          {caught ? (
            <button onClick={e => this.levelUp()}>Level up!</button>
          ) : null}
        </div>
        <br />
        <div className="controls">
          {caught ? (
            <button onClick={e => this.release()}>Release</button>
          ) : (
            <button onClick={e => this.catch()}>Catch</button>
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
