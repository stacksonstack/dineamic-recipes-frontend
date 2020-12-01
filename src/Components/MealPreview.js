import React, {Component} from 'react'

class MealPreview extends Component{

    localClickHandler = () => {
        this.props.mealClicked(this.props.meal)
    }
    
    
    render(){
        return(
            <>
            <div onClick={this.localClickHandler}>
                <h1>{this.props.meal.name}</h1>
                <img alt={this.props.meal.name} src={this.props.meal.image}/>
            </div>
            <div>
            <button onClick={()=> {this.props.addToMyMeals(this.props.meal)}}>Add To My Meals List</button>
            </div>
            </>
        )
    }
}

export default MealPreview;