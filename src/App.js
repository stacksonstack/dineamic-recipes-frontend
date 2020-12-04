import "./App.css";
import React, { Component } from "react";
import MealsContainer from "./Containers/MealsContainer";
import NewMeal from "./Components/NewMeal";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { Route, Switch, withRouter } from "react-router-dom";
import Footer from './Components/Footer'
import Search from "./Components/Search";

class App extends Component {
  state = {
    meals: [],
    filteredMeals: [],
    searchValue: [],
    myMeals: [],

    // Change user to an actual user in your database
    currentUserId: null,
    
    currentUserName: "Guest",
  };

  async componentDidMount() {

    let response = await fetch("http://localhost:3000/api/v1/meals");
    let data = await response.json();
    this.setState({ meals: data, filteredMeals: data });

  }

  async fetchUserMeals() {

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

  removeFromMyMeals = (meal) => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/user_meals/${meal.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ myMeals: data });
      });
  }

  loginSubmitHandler = (email) => {
    fetch(`http://localhost:3000/api/v1/users/`)
      .then((r) => r.json())
      .then((data) => {
        data.forEach((user) => {
          if (email === user.email) {
            this.setCurrentUser(user)
            this.props.history.push(`/meals`)
          }
        });
      });
  };

  setCurrentUser = user => {
    this.setState({ currentUserId: user.id }, this.fetchUserMeals);
    this.setState({ currentUserName: user.name });
  }

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
      .then((data) => {
        this.setCurrentUser(data)
        this.props.history.push(`/meals`)
      });
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

  searchHandler = event => {
    this.setState({searchValue: event.target.value})
  }

  filteredMeals = () => {
    return this.state.meals.filter(meal => meal.name.toLowerCase().includes(this.state.searchValue.toString().toLowerCase()))
  }

  logoutClickHandler = () => {
    this.setState({currentUserId: null, currentUserName: "Guest"})
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUserName} currentUserId={this.state.currentUserId} logoutClickHandler={this.logoutClickHandler}/>

        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login loginSubmitHandler={this.loginSubmitHandler} currentUserId={this.state.currentUserId} />
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
              <>
              < Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
              <MealsContainer
                meals={this.filteredMeals()}
                addToMyMeals={this.persistMyMeal}
              />
              </>
            )}
          />
          <Route
            path="/mymeals"
            render={() => (
              <MealsContainer
                meals={this.state.myMeals}
                removeFromMyMeals={this.removeFromMyMeals}
              />
            )}
          />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
