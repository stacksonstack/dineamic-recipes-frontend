import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MealPreview extends Component {
  localClickHandler = () => {
    this.props.mealClicked(this.props.meal);
  };

  myMealsCheck = () => {
    return this.props.addToMyMeals ? (
      <button
        onClick={() => {
          this.props.addToMyMeals(this.props.meal);
        }}
      >
        Add To My Meals List
      </button>
    ) : 
    
    <button
        onClick={() => {
          this.props.removeFromMyMeals(this.props.meal);
        }}
      >
        Remove From My Meals List
      </button>;
  };

  render() {
    return (
      <div id="preview-card">
          <NavLink to={`/meals/${this.props.meal.id}`}>
            <div onClick={this.localClickHandler}>
              <div id="preview-name">
                <h1>{this.props.meal.name}</h1>
              </div>
              <div id="preview-img">
                <img alt={this.props.meal.name} src={this.props.meal.image} />
              </div>
            </div>
          </NavLink>
          <div id="preview-button">{this.myMealsCheck()}</div>
      </div>
    );
  }
}

export default MealPreview;
