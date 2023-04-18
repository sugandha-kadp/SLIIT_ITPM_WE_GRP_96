import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ListSupplyRequestComponent';
import MarketPlaceComponent from './components/Marketplace_Management_IT20659608/MarketPlaceComponent';
import Home from './components/Common_components/Home';
import Login from './components/Login/Login';
import DashBoard from './components/Common_components/DashBoard';


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
            {/* <Route path="/Add-SupplyRequest" component={ }></Route>
            <Route path="/Update-SupplyRequest" component={ }></Route>
            <Route path="/Approved-SupplyRequest" component={ }></Route>
            <Route path="/Rejected-SupplyRequest" component={ }></Route> */}

            {/* Market Place*/}
            <Route path="/MarketPlaceItems" exact component={MarketPlaceComponent}></Route>


            {/* Recipe */}
            {/* <Route path="/" component={ }></Route> */}

            {/* Advertisement */}
            {/* <Route path="/" component={ }></Route> */}



          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
