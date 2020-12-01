import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  handleState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleState}
          ></input>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleState}
          ></input>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={this.handleState}
          ></input>
          <label>Confirm Password</label>
          <input
            type="text"
            value={this.state.password2}
            name="password2"
            onChange={this.handleState}
          ></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
