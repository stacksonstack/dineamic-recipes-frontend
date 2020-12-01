import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <h1>Recipe App</h1>

        <ul className="nav">
          <li>All Meals</li>
          <li>My Meals</li>
          <li>Add New Meal</li>
          <li>Sign Up</li>
          <li>Login</li>
          <li>Welcome {this.props.currentUser}</li>
        </ul>
      </>
    );
  }
}

export default Header;
