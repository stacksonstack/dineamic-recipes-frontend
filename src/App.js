import "./App.css";
import React, { Component } from "react";
import MealsContainer from "./Containers/MealsContainer";
import NewMeal from "./Components/NewMeal";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    meals: [],
    myMeals: [],
    currentUserId: 1,
    currentUserName: "Guest",
  };

  async componentDidMount() {
    
    let response = await fetch("http://localhost:3000/api/v1/meals");
    let data = await response.json();
    this.setState({ meals: data });

    let mealResponse = await fetch(
      `http://localhost:3000/api/v1/users/${this.state.currentUserId}/`
    );
    let mealData = await mealResponse.json();
    this.setState({ myMeals: mealData.meals });
  }

  persistMyMeal = (meal) => {
    fetch("http://localhost:3000/api/v1/user_meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.currentUserId,
        meal_id: meal.id,
        favorite: false,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ myMeals: [...this.state.myMeals, meal] }, () =>
          console.log(this.state.myMeals)
        );
      });
  };

  loginSubmitHandler = (email) => {
    fetch(`http://localhost:3000/api/v1/users/`)
      .then((r) => r.json())
      .then((data) => {
        data.forEach((user) => {
          if (email === user.email) {
            this.setState({ currentUserId: user.id });
            this.setState({ currentUserName: user.name });
          }
        });
        console.log(this.state.currentUserId);
      });
  };

  submitUser = (userObj) => {
    const { name, email, password } = userObj;
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  submitHandler = (mealObj) => {
    const {
      name,
      image,
      category,
      origin,
      youtube_link,
      instructions,
      measurement,
      ingredient,
    } = mealObj;

    fetch("http://localhost:3000/api/v1/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        category,
        origin,
        youtube_link,
        instructions,
        measurement,
        ingredient,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ meals: [...this.state.meals, data] });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUserName} />

        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login loginSubmitHandler={this.loginSubmitHandler} />
            )}
          />
          <Route
            path="/signup"
            render={() => <SignUp submitUser={this.submitUser} />}
          />
          <Route
            path="/meals/new"
            exact
            render={() => <NewMeal submitHandler={this.submitHandler} />}
          />
          <Route
            path="/meals"
            render={() => (
              <MealsContainer
                meals={this.state.meals}
                addToMyMeals={this.persistMyMeal}
              />
            )}
          />
          <Route
            path="/mymeals"
            render={() => (
              <MealsContainer
                meals={this.state.myMeals}
              />
            )}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
