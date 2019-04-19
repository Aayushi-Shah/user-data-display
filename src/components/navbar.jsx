import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "../css/navbar.css";

class NavBar extends Component {
  handleKeyPress = event => {
    var charCode = event.charCode || event.keyCode; // Get the Unicode value

    if (charCode == 8) {
      this.props.removeCharacter();
    } else if (charCode >= 65 && charCode <= 90) {
      var character = String.fromCharCode(charCode); // Convert the value into a character
      this.props.getCharacter(character);
    } else {
      return;
    }
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          User Details
        </a>
        <div className="search-block">
          <i className="fa fa-search search-icon" />
          <input
            type="text"
            id="search-bar"
            placeholder="Search For User"
            onKeyDown={this.handleKeyPress}
          />
        </div>
      </nav>
    );
  }
}

export default NavBar;
