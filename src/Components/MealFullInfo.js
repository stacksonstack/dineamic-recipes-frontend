import React, {Component} from 'react'

class MealFullInfo extends Component{
    
    
    render(){
        return(
            <div>
                
                <h1>{this.props.meal.name}</h1>
                <h2>Food Category: {this.props.meal.category}</h2>
                <h2>Food Origin: {this.props.meal.origin}</h2>
                <h2>YouTube Link: {this.props.meal.youtube_link}</h2>
                <img alt={this.props.meal.name} src={this.props.meal.image}/>
                <p>Instruction: {this.props.meal.instructions} </p>
                <p>Ingredients: {this.props.meal.ingredient}</p>
                <p>Measurements: {this.props.meal.measurement}</p>
            </div>
        )
    }
}

export default MealFullInfo;