import './App.css';
import React, {Component} from 'react'
import MealsContainer from './Containers/MealsContainer'
import MealFullInfo from './Components/MealFullInfo'

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
    let mealResponse = await fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/`)
    let mealData = await mealResponse.json()
    this.setState({myMeals: mealData.meals})
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
      this.setState({myMeals: [...this.state.myMeals, meal]}, ()=> console.log(this.state.myMeals))
    })
  }

  
  render(){
    return (
      <div >
        <MealsContainer meals={this.state.myMeals} mealClicked={this.mealClicked} />
        <MealsContainer meals={this.state.meals} mealClicked={this.mealClicked} addToMyMeals={this.persistMyMeal} />
        <MealFullInfo meal={this.state.mealClicked}/>
      </div>
    )
  }
}

export default App;
