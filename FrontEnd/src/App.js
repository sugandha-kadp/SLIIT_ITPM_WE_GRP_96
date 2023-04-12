import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ListSupplyRequestComponent';
import MarketPlaceComponent from './components/Marketplace_Management_IT20659608/MarketPlaceComponent';
import Home from './components/Common_components/Home';


function App() {
  return (
    <div>
        <Router>
                <div>
                    <Switch> 
                          <Route path="/" exact component={MarketPlaceComponent}/>
                          <Route path = "/Home" exact component = {Home}></Route>
                          <Route path = "/SupplyRequests" exact component = {ListSupplyRequestComponent}></Route>
                          <Route path = "/MarketPlaceItems" exact component = {MarketPlaceComponent}></Route>
                    </Switch>
                  </div>
        </Router>
    </div>
    
  );
}

export default App;
