import React, { Component } from "react";
import userData from "../userData.json";
import UserCard from "./usercard.jsx";
import NoUserCard from "./nousercard.jsx";
import "../css/usercards.css";

class UserCards extends Component {
  searchUser = () => {
    return this.props.UserSearch.length
      ? userData.filter(user =>
          (user.first_name + user.last_name + user.email)
            .toUpperCase()
            .includes(this.props.UserSearch)
        )
      : userData;
  };
  render() {
    return (
      <React.Fragment>
        <div className="cont">
          <div className="row">
            {this.searchUser().length ? (
              this.searchUser().map(user => (
                <div className="col-4">
                  <UserCard key={user.id} user={user} />
                </div>
              ))
            ) : (
              <NoUserCard />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCards;
