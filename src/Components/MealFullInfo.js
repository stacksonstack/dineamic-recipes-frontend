import React, { Component } from "react";
// import Ingredient from "./Ingredient";

class MealFullInfo extends Component {
  render() {
    return (
      <>
      
        <h1 id="show-name">{this.props.meal.name}</h1>
        <div id="show-container">
          <div id="show-category">
            <h2>Food Category:</h2>  <h3> {this.props.meal.category}</h3>
          </div>
          <div id="show-origin">
          <h2>Food Origin:</h2>  <h3> {this.props.meal.origin}</h3>
          </div>
          <div id="show-youtube">
            <h2>YouTube Link:</h2><h3 id="yt"> <a href={this.props.meal.youtube_link} > {this.props.meal.youtube_link}</a></h3>
          </div>
          <div id="show-image">
          
            <img id="s-image" alt={this.props.meal.name} src={this.props.meal.image} />
           
          </div>
          <div id="show-instructions">
            <p id="how-to"><b id="how-to2">How To Create This Recipe:</b> {this.props.meal.instructions} </p>
          </div>
          <div id="show-measurements">
            <h2 class="font-style">Measurements</h2>
            {this.props.meal.measurement.map((measurement) => (
              
              <p class="table">{measurement}</p>
            ))}
          </div>
          <div id="show-ingredients">
            <h2 class="font-style">Ingredients</h2>
            {this.props.meal.ingredient.map((ingredient) => (
              <p >{ingredient}</p>
            ))}
          </div>
        </div>
      
      </>
    );
  }
}

export default MealFullInfo;
