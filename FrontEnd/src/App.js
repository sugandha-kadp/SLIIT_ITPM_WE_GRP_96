import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListRecipeComponent from './components/Recipe_Blog_Management_IT20659912/ListRecipeComponent';
import AddRecipe from './components/Recipe_Blog_Management_IT20659912/AddRecipe';
import SingleRecipe from './components/Recipe_Blog_Management_IT20659912/SingleRecipe';
import EditRecipe from './components/Recipe_Blog_Management_IT20659912/EditRecipe';
import RecipeReport from './components/Recipe_Blog_Management_IT20659912/RecipeReport';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
    
            {/* Recipe */}
            <Route exact path="/Recipes"  component={ListRecipeComponent}></Route>
            <Route path="/AddRecipe" component={AddRecipe}></Route>
            <Route path="/View/:recipeId" component={SingleRecipe}></Route>
            <Route path="/EditRecipe/:recipeId" component={EditRecipe}></Route>
            <Route path="/Report" component={RecipeReport}></Route>

            {/* Advertisement */}
            {/* <Route path="/" component={ }></Route> */}



          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
