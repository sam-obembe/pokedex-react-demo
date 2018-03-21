// DEPENDENCIES
import React from "react";
// STYLING
import "./Header.css";

// FUNCTIONAL COMPONENT
function Header({ name }) {
  return <div className="header">{name}'s Pokedex</div>;
}

export default Header;
