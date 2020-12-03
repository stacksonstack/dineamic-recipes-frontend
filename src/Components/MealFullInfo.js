import React, { Component } from "react";
import Ingredient from "./Ingredient";

class MealFullInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.meal.name}</h1>
        <div id="show-container">
          <div id="show-category">
            <h2>Food Category: {this.props.meal.category}</h2>
          </div>
          <div id="show-origin">
            <h2>Food Origin: {this.props.meal.origin}</h2>
          </div>
          <div id="show-youtube">
            <h2>YouTube Link: {this.props.meal.youtube_link}</h2>
          </div>
          <div id="show-image">
            <img alt={this.props.meal.name} src={this.props.meal.image} />
          </div>
          <div id="show-instructions">
            <p>Instruction: {this.props.meal.instructions} </p>
          </div>
          <div id="show-measurements">
            <h2>Measurements:</h2>
            {this.props.meal.measurement.map((measurement) => (
              <p>{measurement}</p>
            ))}
          </div>
          <div id="show-ingredients">
            <h2>Ingredients:</h2>
            {this.props.meal.ingredient.map((ingredient) => (
              <p>{ingredient}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MealFullInfo;
