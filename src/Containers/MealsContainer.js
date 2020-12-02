import React, {Component} from 'react'
import MealPreview from '../Components/MealPreview'
import MealFullInfo from "../Components/MealFullInfo";


class MealsContainer extends Component{

    state = {
        mealClicked: ""
    }

    mealClicked = (meal) => {
        this.setState({ mealClicked: meal });
      };
    
    renderMealPreview=()=>{
    return this.props.meals.map((meal) => <MealPreview key={meal.id} meal={meal} mealClicked={this.mealClicked} addToMyMeals={this.props.addToMyMeals} />)
    }
    
    render(){
        return(
            <div>
                <MealFullInfo meal={this.state.mealClicked} />
                {this.renderMealPreview()}
            </div>
        )
    }
}


export default MealsContainer;