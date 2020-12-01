import React, {Component} from 'react'
import MealPreview from '../Components/MealPreview'

class MealsContainer extends Component{
    
    renderMealPreview=()=>{
    return this.props.meals.map((meal) => <MealPreview key={meal.id} meal={meal} mealClicked={this.props.mealClicked} addToMyMeals={this.props.addToMyMeals} />)
    }
    
    render(){
        return(
            <div>
                {this.renderMealPreview()}
            </div>
        )
    }
}


export default MealsContainer;