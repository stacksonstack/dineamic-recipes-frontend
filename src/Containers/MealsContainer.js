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
        removeFromMyMeals={this.props.removeFromMyMeals}
    
      />
    ));
  };

  render() {
    return (
      <>
        {this.props.meals && this.props.meals.length === 0  ? (
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
              <Route path="/mymeals" render={()=> {return <><h1 class="container-title">My Saved Recipes</h1><div class="preview-flex">{this.renderMealPreview()}</div></> }}/>
              <Route path="/meals" render={()=> {return <> <h1 class="container-title">All Recipes</h1> <div class="preview-flex"> {this.renderMealPreview()}</div> </>}}/>
              {/* <Route path="/meals" render/> */}
            </Switch>
          </>
        )}

        {/* <div>{this.renderMealPreview()}</div> */}
      </>
    );
  }
}

export default MealsContainer;
