// DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";
// CHILD COMPONENTS
import Pokemon from "../Pokemon/Pokemon";
// STYLING
import "./Pokedex.css";

// CLASS COMPONENT
class Pokedex extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      searchInput: "",
      pokemon: []
    };
  }
  // SEARCH INPUT CHANGE
  handleSearch(val) {
    this.setState({ searchInput: val });
  }
  componentDidMount() {
    // GET POKEMON
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => {
      console.log("PokeAPI response: ", response);
      this.setState({ pokemon: response.data.results });
    });
  }
  // RENDER POKEDEX
  render() {
    // console.log(this.state);
    const { pokemon, searchInput } = this.state;
    // Search filter and pokemon components
    const pokeList = pokemon
      .filter(p => p.name.includes(searchInput))
      .map(p => {
        // console.log(p);
        return <Pokemon key={p.url} name={p.name} />;
      });
    return (
      <div className="pokedex">
        <input
          className="search"
          type="text"
          placeholder="Search Pokemon Names"
          onChange={e => this.handleSearch(e.target.value)}
        />
        <div className="list">{pokeList}</div>
      </div>
    );
  }
}

export default Pokedex;
