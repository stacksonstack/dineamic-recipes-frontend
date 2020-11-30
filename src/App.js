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
    myMealCards: []
  }

  mealClicked = (meal) => {
    this.setState({ mealClicked: meal})
  }
  async componentDidMount(){
    let response = await fetch("http://localhost:3000/api/v1/meals")
    let data = await response.json()
    this.setState({meals: data})
    let mealResponse = await fetch("http://localhost:3000/api/v1/user_meals")
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
        user_id: 1,
        meal_id: meal.id,
        favorite: false
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({myMeals: [...this.state.myMeals, data]})
      // this.setState({myMealCards: [...this.state.myMealCards, meal]})
      // this.renderMyMeals()
    })
  }

  // renderMyMeals=()=>{
  //   this.myMealCards.map((meal) => <MealPreview key={meal.id} meal={meal} mealClicked={this.props.mealClicked} addToMyMeals={this.props.addToMyMeals} />)
  // }
  


  
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
