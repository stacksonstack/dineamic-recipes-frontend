import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <h1>Recipe App</h1>

        <ul className="nav">
          <NavLink to="/meals">
            <li>All Meals</li>
          </NavLink>
          <NavLink to="/mymeals">
            <li>My Meals</li>
          </NavLink>
          <NavLink to="/meals/new">
            <li>Add New Meal</li>
          </NavLink>
          <NavLink to="/signup">
            <li>Sign Up</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <li>Welcome {this.props.currentUser}</li>
        </ul>
      </>
    );
  }
}

export default Header;
