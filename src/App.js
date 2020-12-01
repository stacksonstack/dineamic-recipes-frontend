import './App.css';
import React, {Component} from 'react'
import AllMealsContainer from './Containers/AllMealsContainer'
import MealFullInfo from './Components/MealFullInfo'
import MyMealsContainer from './Containers/MyMealsContainer'

class App extends Component{
  
  state={
    meals: [],
    mealClicked: "",
    myMeals: [],
    currentUserId: 1
  }

  mealClicked = (meal) => {
    this.setState({ mealClicked: meal})
  }
  async componentDidMount(){
    let response = await fetch("http://localhost:3000/api/v1/meals")
    let data = await response.json()
    this.setState({meals: data})
    let mealResponse = await fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/user_meals`)
    let mealData = await mealResponse.json()
    this.setState({myMeals: mealData})
  }

  persistMyMeal=(meal)=>{
    fetch("http://localhost:3000/api/v1/user_meals", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },body: JSON.stringify({
        user_id: this.state.currentUserId,
        meal_id: meal.id,
        favorite: false
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({myMeals: [...this.state.myMeals, data]})
    })
  }

  
  render(){
    return (
      <div >
        <AllMealsContainer meals={this.state.myMeals} mealClicked={this.mealClicked} addToMyMeals={this.persistMyMeal} />
        {/* <AllMealsContainer meals={this.state.meals} mealClicked={this.mealClicked} addToMyMeals={this.persistMyMeal} /> */}
        <MealFullInfo meal={this.state.mealClicked}/>
      </div>
    )
  }
}

export default App;
