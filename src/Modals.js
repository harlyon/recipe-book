import React, {Component} from 'react'
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'


//ingredients will be comma seperated.
//parse that str into an array of ingredients
//returns array of ingredients
function parseIngredients(str) {
  return str.split(',').map(function(element){
    return element.replace(' ', '')
  })
}

//sets up open/close functionality of each modal
class MyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({
      showModal: true
    })
  }

  close() {
    this.setState({
      showModal: false
    })
  }
}


export class AddRecipeModal extends MyModal {
  render() {
    return(
      <Modal>
        <Modal.Header closeButton>Add Recipe</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Recipe:</ControlLabel>
              <FormControl type="text" placeholder="Recipe Name" inputRef={(ref)=>{this.recipeName = ref}}></FormControl>
              <ControlLabel>Ingredients:</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter Ingredients, Comma Seperated" inputRef={(ref)=>{this.ingredients=ref}}></FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Add Recipe</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export class EditRecipeModal extends MyModal {
  render() {
    return(
      <Modal>
        <Modal.Header closeButton>Edit Recipe</Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Recipe:</ControlLabel>
              <FormControl type="text" placeholder="Recipe Name" inputRef={(ref)=>{this.recipeName = ref}} value={this.props.name}></FormControl>
              <ControlLabel>Ingredients:</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter Ingredients, Comma Seperated" inputRef={(ref)=>{this.ingredients=ref}} value={this.props.ingredients}></FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="rpimary">Edit Recipe</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
