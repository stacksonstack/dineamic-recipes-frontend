import React, { Component } from "react";

class NewMeal extends Component {
  state = {
    name: "",
    image: "",
    category: "",
    origin: "",
    youtube_link: "",
    instructions: "",
    measurement: [""],
    ingredient: [""],
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

      let ingredient = [...this.state.ingredient];
      ingredient[event.target.id] = event.target.value;
      this.setState({ingredient});

    }

  handleMeasurementsState = (event) => {

    let measurement = [...this.state.measurement];
    measurement[event.target.id] = event.target.value;
    this.setState({measurement});

  }

  renderArray = () => {
    var newArray = [];
    for (var i =0; i < this.state.ingredientNum && i < 20; i++) {
      newArray.push(
        <span key={i}>
          <label>Ingredient {i + 1}</label><br/>
          <input
            
            type="text"
            id={i}
            value={this.state.ingredient[i] ? this.state.ingredient[i] : ""}
            name="ingredient"
            onChange={this.handleIngredientsState}
            required
          ></input><br/><br/>

          <label>Measurement {i + 1}</label><br/>
          <input
            id={i}
            type="text"
            value={this.state.measurement[i] ? this.state.measurement[i] : ""}
            name="measurement"
            onChange={this.handleMeasurementsState}
            required
          ></input><br/><br/>
        </span>
      );
    }
    return newArray;
  };

  localSubmitHandler = event => {
    event.preventDefault()
    this.props.submitHandler(this.state)
  }

  render(){
    return (
      <div id="new-meal">
          <h1 class="container-title">Submit A Recipe!</h1>
        <form onSubmit={this.localSubmitHandler}>
          <label>Meal Name</label><br/>
          <input type="text" value={this.state.name} name="name" onChange={this.handleState} required></input><br/><br/>
          <label>Meal Image</label><br/>
          <input type="text" value={this.state.image} name="image" onChange={this.handleState} required></input><br/><br/>
          <label>Meal Origin</label><br/>
          <input type="text" value={this.state.origin} name="origin" onChange={this.handleState} required></input><br/><br/>
          <label >Meal Category</label><br/>
          <select value={this.state.category} id="category" name="category" onChange={this.handleState} required>
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
          </select><br/><br/>
          <label>YouTube Link</label><br/>
          <input
            type="text"
            value={this.state.youtube_link}
            name="youtube_link"
            onChange={this.handleState}
          ></input><br/><br/>
          <label>Instructions</label><br/>
          <input
            type="text"
            value={this.state.instructions}
            name="instructions"
            onChange={this.handleState}
            required
          ></input><br/><br/>
          {this.renderArray()}
          <button onClick={(e) => { e.preventDefault()
            this.handleAddIngredients()}}>
            Add Ingredients and Measurements
          </button> <br/><br/>
          <input type="submit" value="Submit New Meal"/>
        </form>
      </div>
    );
  }
}

export default NewMeal;
