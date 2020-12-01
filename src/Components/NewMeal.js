import React, { Component } from "react";

class NewMeal extends Component {
  state = {
    name: "",
    category: "",
    origin: "",
    youtube_link: "",
    instructions: "",
    measurement: [],
    ingredient: [],
    ingredientNum: 1,
  };

  handleAddIngredients = () => {
    let newNum = this.state.ingredientNum + 1;
    this.setState({ ingredientNum: newNum });
  };

  handleState = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleIngredientsState = (event) => {
    this.setState({
      ingredient: [...this.state.ingredient, event.target.value],
      measurement: [...this.state.measurement, event.target.value]
    })}

  renderArray = () => {
    var newArray = [];
    for (var i =0; i < this.state.ingredientNum && i < 20; i++) {
      newArray.push(
        <>
          <label>Ingredient {i + 1}</label>
          <input
            
            type="text"
            value={this.state.ingredient}
            name="ingredient"
            onChange={this.handleState}
          ></input>

          <label>Measurement {i + 1}</label>
          <input
            key={null}
            type="text"
            value={this.state.measurement}
            name="measurement"
            onChange={this.handleState}
          ></input>
        </>
      );
    }
    return newArray;
  };

  render(){
    console.log(this.state)
    return (
      <div>
        <form>
          <label>Meal Name</label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleState}></input>
          <label>Meal Origin</label>
          <input type="text" value={this.state.origin} name="origin" onChange={this.handleState}></input>
          <label >Meal Category</label>
          <select value={this.state.category} id="category" name="category" onChange={this.handleState}>
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="dessert">Dessert</option>
            <option value="lamb">Lamb</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="pasta">Pasta</option>
            <option value="pork">Pork</option>
            <option value="seafood">Seafood</option>
            <option value="side">Side</option>
            <option value="starter">Starter</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="breakfast">Breakfast</option>
            <option value="goat">Goat</option>
          </select>
          <label>YouTube Link</label>
          <input
            type="text"
            value={this.state.youtube_link}
            name="youtube_link"
            onChange={this.handleState}
          ></input>
          <label>Instructions</label>
          <input
            type="text"
            value={this.state.instructions}
            name="instructions"
            onChange={this.handleState}
          ></input>
          {this.renderArray()}
          <button onClick={(e) => { e.preventDefault()
            this.handleAddIngredients()}}>
            Add Ingredients and Measurements
          </button>

          <button onSubmit={(e)=>{e.preventDefault()}}>Submit New Meal</button>
        </form>
      </div>
    );
  }
}

export default NewMeal;
