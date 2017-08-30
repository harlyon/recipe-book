import React, { Component } from 'react';
import {AddRecipeModal, EditRecipeModal} from './Modals.js'

class App extends Component {
  constructor() {
    super()
    this.state={
      recipes: JSON.parse(localStorage.recipes) //{0:{name: '', ingredients:['', '']}, 1:...}
    }
    this.addRecipe = this.addRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
    this.removeRecipe = this.removeRecipe.bind(this)
  }

  addRecipe(name, ingredients) {
    //name = Str, ingredients= []
    //get the number of recipes
    var i = Object.keys(this.state.recipes).length
    const recipes = this.state.recipes
    recipes[i] = {name: name, ingredients: ingredients}
    this.setState({recipes: recipes})
    localStorage.recipes = JSON.stringify(recipes)
  }

  editRecipe(i, name, ingredients){
    const recipes = this.state.recipes
    recipes[i] = {name: name, ingredients: ingredients}
    this.setState({recipes: recipes})
    localStorage.recipes = JSON.stringify(recipes)
  }

  removeRecipe(index) {
    var newRecipes = {}
    //remove the desired recipe, then move the remaining recipes up
    for (var i = 0; i < index; i++){
      newRecipes[i] = this.state.recipes[i]
    }
    for (i = index+1; i < Object.keys(this.state.recipes).length;i++){
      newRecipes[i-1] = this.state.recipes[i]
    }
    this.setState({
      recipes: newRecipes
    })
    localStorage.recipes = JSON.stringify(newRecipes)
  }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

export default App;
