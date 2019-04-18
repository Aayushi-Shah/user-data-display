import React, { Component } from "react";
import "../css/usercard.css";

class UserCard extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="user-card">
          <img
            className="user-image img-responsive"
            src={this.props.user.image}
            alt="user image"
          />
          <div className="body-details">
            <span>
              <b>{this.props.user.first_name} </b>
              <b>{this.props.user.last_name}</b>
            </span>
            <p>{this.props.user.email}</p>
            <p>{this.props.user.gender}</p>
            <p className="user-text">{this.props.user.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCard;
