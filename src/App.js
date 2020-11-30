import './App.css';
import React, {Component} from 'react'
import AllMealsContainer from './Containers/AllMealsContainer'
import MealFullInfo from './Components/MealFullInfo'
import MyMealsContainer from './Containers/MyMealsContainer'

class App extends Component{
  
  state={
    meals: [],
    mealClicked: ""
  }

  mealClicked = (meal) => {
    this.setState({ mealClicked: meal})
  }
  async componentDidMount(){
    let response = await fetch("http://localhost:3000/api/v1/meals")
    let data = await response.json()
    this.setState({meals: data})
  }

  // addToMyMeals=(meal)=>{
  //   this.setState({mealAdded: meal})
  // }

  persistMyMeal=(meal)=>{
    fetch("http://localhost:3000/api/v1/user_meals", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },body: JSON.stringify({
        user_id: 1,
        meal_id: meal.id,
        favorite: false
      })
    })
    .then(resp => resp.json())
    .then(console.log)
  }
  
  render(){
    return (
      <div >
        <MyMealsContainer />
        <AllMealsContainer meals={this.state.meals} mealClicked={this.mealClicked} addToMyMeals={this.persistMyMeal} />
        <MealFullInfo meal={this.state.mealClicked}/>
      </div>
    )
  }
}

export default App;
