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
            <div>
              <b>{this.props.user.email}</b>
            </div>
            <div>
              <b>{this.props.user.gender}</b>
            </div>
            <div className="text-div">
              <p className="user-text">{this.props.user.description}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCard;
