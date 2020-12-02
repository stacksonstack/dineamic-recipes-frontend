import React, { Component } from "react";
import MealPreview from "../Components/MealPreview";
import MealFullInfo from "../Components/MealFullInfo";
import { Route, Switch } from "react-router-dom";

class MealsContainer extends Component {
  state = {
    mealClicked: "",
  };

  mealClicked = (meal) => {
    this.setState({ mealClicked: meal });
  };

  renderMealPreview = () => {
    return this.props.meals.map((meal) => (
      <MealPreview
        key={meal.id}
        meal={meal}
        mealClicked={this.mealClicked}
        addToMyMeals={this.props.addToMyMeals}
      />
    ));
  };

  render() {
    return (
      <>
        {this.props.meals.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Switch>
              <Route
                path="/meals/:id"
                render={({ match }) => {
                  let id = parseInt(match.params.id);
                  let meals = this.props.meals.find((meal) => meal.id === id);
                  console.log(meals);
                  return (
                    <MealFullInfo
                    //   foundMeal={meals}
                    //   meal={this.state.mealClicked}
                    meal={meals}
                    />
                  );
                }}
              />
            </Switch>
          </>
        )}

        <div>{this.renderMealPreview()}</div>
      </>
    );
  }
}

export default MealsContainer;
