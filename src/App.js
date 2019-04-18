import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/navbar";
import UserCards from "./components/usercards";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <UserCards />
      </React.Fragment>
    );
  }
}

export default App;
