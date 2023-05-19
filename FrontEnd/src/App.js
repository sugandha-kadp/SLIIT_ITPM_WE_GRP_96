import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ListSupplyRequestComponent';
import MarketPlaceComponent from './components/Marketplace_Management_IT20659608/MarketPlaceComponent';
import Home from './components/Common_components/Home';
import Login from './components/Login/Login';
import DashBoard from './components/Common_components/DashBoard';
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
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home}></Route>
            <Route path="/DashBoard" component={DashBoard}></Route>

            {/* Supply Request */}
            <Route path="/SupplyRequests" component={ListSupplyRequestComponent}></Route>

            {/* Market Place*/}
            <Route path="/MarketPlaceItems" exact component={MarketPlaceComponent}></Route>


            {/* Recipe */}
            <Route path="/Recipes" exact component={ListRecipeComponent}></Route>
            <Route path="/AddRecipe" component={AddRecipe}></Route>
            <Route path="/View" component={SingleRecipe}></Route>
            <Route path="/EditRecipe" component={EditRecipe}></Route>
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
