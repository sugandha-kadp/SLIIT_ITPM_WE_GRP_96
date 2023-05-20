import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListSupplyRequestComponent from './components/Supply_Request_Management_(IT20658236)/ListSupplyRequestComponent';
import HeaderComponent from './components/Supply_Request_Management_(IT20658236)/HeaderComponent';
import FooterComponent from './components/Supply_Request_Management_(IT20658236)/FooterComponent';
import AddSupplyRequestComponnent from './components/Supply_Request_Management_(IT20658236)/AddSupplyRequestComponnent';
import ViewSupplyRequest  from './components/Supply_Request_Management_(IT20658236)/ViewSupplyRequest';
import CurrentStockItemReportComponent from './components/Supply_Request_Management_(IT20658236)/CurrentSupplyRequestsReportComponent';
import ApprovedSupplyRequestComponnent from './components/Supply_Request_Management_(IT20658236)/ApprovedSupplyRequestComponnent';
import RejectSupplyRequestComponnent from './components/Supply_Request_Management_(IT20658236)/RejectSupplyRequestComponnent';

import Login from "./components/Login/Login";
import RejectedSupplyRequestsReportComponent from './components/Supply_Request_Management_(IT20658236)/RejectedSupplyRequestsReportComponent';
import ApprovedSupplyRequestReportComponents from './components/Supply_Request_Management_(IT20658236)/ApprovedSupplyRequestReportComponents';
import ApprovedQuotation from './components/Supply_Request_Management_(IT20658236)/ApprovedQuotation';

// import Sidebar from './components/Stock_Management_(IT20658236)/Sidebar';


function App() {
  return (
    <div>
        <Router>
              {/* <HeaderComponent/> */}
                <div>

                    <Switch> 
                           {/* <Route path="/" exact component={Login} /> */}

                          <Route path = "/" exact component = {ListSupplyRequestComponent}></Route>
                          <Route path = "/supplyRequest" component = {ListSupplyRequestComponent}></Route> 
                          <Route path = "/add-supplyRequest" component = {AddSupplyRequestComponnent}></Route>

                           <Route path = "/view-supplyRequest/:requestID" component = {ViewSupplyRequest}></Route>
                           <Route path = "/current-supplyRequests-report" component = {CurrentStockItemReportComponent}></Route>
                           <Route path = "/approve-supplyRequest/:requestID" component = {ApprovedSupplyRequestComponnent}></Route>

                          <Route path = "/reject-supplyRequest/:requestID" component = {RejectSupplyRequestComponnent}></Route>
                          <Route path = "/reject-SupplyRequest-report" component = {RejectedSupplyRequestsReportComponent}></Route>
                          <Route path = "/approved-SupplyRequest-report" component = {ApprovedSupplyRequestReportComponents}></Route>
                          <Route path = "/approved-quotation/:requestID" component = {ApprovedQuotation}></Route>
                          

                    </Switch>
                  </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
