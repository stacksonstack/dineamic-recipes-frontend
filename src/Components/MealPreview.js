import React, {Component} from 'react'
import { NavLink } from "react-router-dom";

class MealPreview extends Component{

    localClickHandler = () => {
        this.props.mealClicked(this.props.meal)
    }

    myMealsCheck =()=> {
        return (
            this.props.addToMyMeals ?
            <button onClick={()=> {this.props.addToMyMeals(this.props.meal)}}>Add To My Meals List</button>
            :
            null
        )
    }  
    
    render(){
        return(
            <> 
            <NavLink to={`/meals/${this.props.meal.id}`}>
            <div onClick={this.localClickHandler}>
                <h1>{this.props.meal.name}</h1>
                <img alt={this.props.meal.name} src={this.props.meal.image}/>
            </div>
            </NavLink>

            <div>
                {this.myMealsCheck()}
            </div>
            </>
        )
    }
}

export default MealPreview;