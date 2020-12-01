import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
  };
  
  localHandler = (e) => {
    e.preventDefault();
    this.props.loginSubmitHandler(this.state.email);
  };

  handleState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.localHandler}>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleState}
          ></input>
          <label>Password</label>
          <input type="text"></input>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Login;
