import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import UserCards from "./components/usercards";

class App extends Component {
  state = {
    characters: ""
  };

  getCharacter = character => {
    let characters = this.state.characters;
    characters += character;
    this.setState({ characters });
  };

  removeCharacter = () => {
    let characters = this.state.characters;
    characters = characters.substring(0, characters.length - 1);
    this.setState({ characters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          getCharacter={this.getCharacter}
          removeCharacter={this.removeCharacter}
        />
        <UserCards UserSearch={this.state.characters} />
      </React.Fragment>
    );
  }
}

export default App;
