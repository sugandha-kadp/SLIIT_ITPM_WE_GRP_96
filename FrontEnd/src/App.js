import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListSupplyRequestComponent from './components/Supply_Request_Management_IT20658236/ListSupplyRequestComponent';


function App() {
  return (
    <div>
        <Router>
                <div>
                    <Switch> 
                          <Route path="/" exact component={ListSupplyRequestComponent}/>
                          <Route path = "/SupplyRequests" exact component = {ListSupplyRequestComponent}></Route>
                    </Switch>
                  </div>
        </Router>
    </div>
    
  );
}

export default App;
