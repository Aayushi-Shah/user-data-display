import React, { Component } from "react";
import userData from "../userData.json";
import UserCard from "./usercard.jsx";
import "../css/usercards.css";

class UserCards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {userData.map(user => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default UserCards;
