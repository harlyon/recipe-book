import React, {Component} from 'react'
import {Well, Panel, Accordion, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import {EditRecipeModal} from './Modals.js'


class Book extends Component {
  render() {
    var recipeComponents = []
    for (var i = 0; i < Object.keys(this.props.recipeObject).length; i++){
      var name = this.props.recipeObject[i].name
      var ingredients = this.props.recipeObject[i].ingredients
      recipeComponents.push(
        <Recipe name={name} ingredients={ingredients} recipeIndex={i} eventKey={i+1} editRecipe={this.props.editRecipe} removeRecipe={this.props.removeRecipe}/>
      )
    }
    return(
      <Well>
        <Accordion>
          {recipeComponents}
        </Accordion>
      </Well>
    )
  }
}

class Recipe extends Component {
  render() {
    const { body, ...props } = this.props

    var ingredientComponents = []
    for (var i = 0; i < this.props.ingredients.length; i++){
      ingredientComponents.push(
        //this.props.ingredients[i]
        <ListGroupItem>{this.props.ingredients[i]}</ListGroupItem>
      )
    }
    return(
      <Panel {...props} header={this.props.name} bsStyle="success" eventKey={this.props.eventKey}>
        <h4 className="text-center">Ingredients</h4>
        <hr></hr>
        <ListGroup>
          {ingredientComponents}
        </ListGroup>
        <div class="row">
        <Button className="edit-btn" bsStyle="danger" onClick={()=>{this.props.removeRecipe(this.props.recipeIndex)}}>Delete</Button>
        <EditRecipeModal editRecipe={this.props.editRecipe}/>
        </div>
      </Panel>

    )
  }
}


export default Book
