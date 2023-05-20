import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
import ListSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ListSupplyRequestComponent';
//import MarketPlaceComponent from './components/Marketplace_Management_IT20659608/MarketPlaceComponent';
import Home from './components/Common_components/Home';
import Login from './components/Login/Login';
import DashBoard from './components/Common_components/DashBoard';
import AddSupplyRequestFormComponent from './components/Supply_Request_Management_IT20658236/AddSupplyRequestFormComponent';
import ViewSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ViewSupplyRequestComponent';
import SupplyRequestQuotationComponent from './components/Supply_Request_Management_IT20658236/SupplyRequestQuotation';
=======
import ListRecipeComponent from './components/Recipe_Blog_Management_IT20659912/ListRecipeComponent';
import AddRecipe from './components/Recipe_Blog_Management_IT20659912/AddRecipe';
import SingleRecipe from './components/Recipe_Blog_Management_IT20659912/SingleRecipe';
import EditRecipe from './components/Recipe_Blog_Management_IT20659912/EditRecipe';
import RecipeReport from './components/Recipe_Blog_Management_IT20659912/RecipeReport';
>>>>>>> 79591a10c4c45013ce1a82d56d1773dc932b66e0


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
<<<<<<< HEAD
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home}></Route>
            <Route path="/DashBoard" component={DashBoard}></Route>

            {/* Supply Request */}
            <Route path="/SupplyRequests" component={ListSupplyRequestComponent}></Route>
            <Route path="/Add-SupplyRequest" component={AddSupplyRequestFormComponent}></Route>
            <Route path="/SupplyRequest-Quotation/:supplyRequestID" component={SupplyRequestQuotationComponent}></Route>
            <Route path="/view-SupplyRequest/:supplyRequestID" component={ViewSupplyRequestComponent}></Route>
            {/* <Route path="/Update-SupplyRequest" component={ }></Route> */}
            {/* <Route path="/Approved-SupplyRequest" component={ }></Route>
            <Route path="/Rejected-SupplyRequest" component={ }></Route> */}

            {/* Market Place*/}



=======
    
>>>>>>> 79591a10c4c45013ce1a82d56d1773dc932b66e0
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
