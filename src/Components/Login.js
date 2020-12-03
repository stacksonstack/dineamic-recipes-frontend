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
      <div id="login">
          <h1 class="container-title">Login</h1>
        <form onSubmit={this.localHandler}>
          <label>Email</label><br/>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleState}
          ></input><br/><br/>
          <label>Password</label><br/>
          <input type="password"></input><br/><br/>
          <input type="submit" value="Login" id="l-btn"/>
        </form>
        { this.props.currentUserId === null ? null : <p>You were logged in successfully!</p>}
      </div>
    );
  }
}
export default Login;
