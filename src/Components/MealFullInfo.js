import React, {Component} from 'react'

class MealFullInfo extends Component{
    
    
    render(){
        return(
            <div>
                
                <h1>{this.props.meal.name}</h1>
                <div id="show-container">
                    <div id="show-category"><h2>Food Category: {this.props.meal.category}</h2></div>
                    <div id="show-origin"><h2>Food Origin: {this.props.meal.origin}</h2></div>
                    <div id="show-youtube"><h2>YouTube Link: {this.props.meal.youtube_link}</h2></div>
                    <div id="show-image"><img alt={this.props.meal.name} src={this.props.meal.image}/></div>
                    <div id="show-instructions"><p>Instruction: {this.props.meal.instructions} </p></div>
                    <div id="show-ingredients"><p>Ingredients: {this.props.meal.ingredient}</p></div>
                    <div id="show-measurements"><p>Measurements: {this.props.meal.measurement}</p></div>
                </div>
            </div>
        )
    }
}

export default MealFullInfo;