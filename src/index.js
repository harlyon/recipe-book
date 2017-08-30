import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (!localStorage.visited){ //if they've never been to the site before...
  //localStorage.recipes= {"Recipe Name": Ingredients}
  localStorage.recipes=JSON.stringify({0:{name:"Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 1:{name:"Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}})
  localStorage.visited = true
}

ReactDOM.render(<App />, document.getElementById('root'));
