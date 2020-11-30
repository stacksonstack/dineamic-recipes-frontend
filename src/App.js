import './App.css';
import React, {Component} from 'react'
import AllMealsContainer from './Containers/AllMealsContainer'
import MealFullInfo from './Components/MealFullInfo'

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

  
  
  render(){
    return (
      <div >
        <MealFullInfo meal={this.state.mealClicked}/>
        <AllMealsContainer meals={this.state.meals} mealClicked={this.mealClicked}/>
      </div>
    )
  }
}

export default App;
