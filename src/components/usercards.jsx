import React, { Component } from "react";
import userData from "../userData.json";
import UserCard from "./usercard.jsx";
import "../css/usercards.css";

class UserCards extends Component {
  searchUser = () => {
    return this.props.UserSearch.length
      ? userData.filter(user =>
          user.first_name.toUpperCase().includes(this.props.UserSearch)
        )
      : userData;
  };
  render() {
    return (
      <React.Fragment>
        <div className="cont">
          <div className="row">
            {this.searchUser().map(user => (
              <div className="col-4">
                <UserCard key={user.id} user={user} />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCards;
