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

  localHandler =(e)=>{
    e.preventDefault()
    this.props.submitUser(this.state)
  }

  render() {
    return (
      <div id="signup">
        <form onSubmit={this.localHandler}>
          <label>Name</label><br/>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleState}
          ></input><br/><br/>
          <label>Email</label><br/>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleState}
          ></input><br/><br/>
          <label>Password</label><br/>
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={this.handleState}
          ></input><br/><br/>
          <label>Confirm Password</label><br/>
          <input
            type="text"
            value={this.state.password2}
            name="password2"
            onChange={this.handleState}
          ></input><br/><br/>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default SignUp;
