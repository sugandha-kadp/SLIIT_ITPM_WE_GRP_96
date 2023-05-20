import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
import SupplyRequestService from '../../services/SupplyRequestService';
import HeaderComponent from '../Supply_Request_Management_(IT20658236)/HeaderComponent';

 class CurrentSupplyRequestsReportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            supplyRequests: [],
            currentDateTime: Date().toLocaleString()
        }

    } 
    
    
    viewSupplyRequest(requestID){
        this.props.history.push(`/view-supplyRequest/${requestID}`);
    }
    
    componentDidMount(){
        SupplyRequestService.getSupplyRequest().then((res) => {
            this.setState({ supplyRequests: res.data});
        });
    }

    //Filter data Function to filter Searched Item
    filterData(supplyRequests,searchKey){
        console.log(searchKey);
        console.log(supplyRequests);
            const result = supplyRequests.filter((supplyRequest) =>
            supplyRequest.itemCode.toLowerCase().includes(searchKey) ||
            supplyRequest.itemCode.toUpperCase().includes(searchKey) ||
            supplyRequest.itemName.toUpperCase().includes(searchKey) ||
            supplyRequest.itemName.toLowerCase().includes(searchKey)  )
            this.setState({supplyRequests:result})
    }

    //Handle Searcher to get User input and send to Filter Function
    handleSearchArea =(e) =>{
      const searchKey = e.target.value;
      SupplyRequestService.getSupplyRequest().then((res) => {
        this.filterData(res.data,searchKey)
    });
    }
        

  render() {
    return (
        <div>
          <HeaderComponent></HeaderComponent>
            <div ref ={el=>(this.componentRef=el)}>
                <div id='repG'>   
                    <h2 className="text-center mt-4 ">Current Supply Request Report</h2>
                    <br></br>
                    <div className='text-center'>
                        <b>Report Generated Date & Time</b>
                    </div>
                    <div className='text-center'>
                        <p>{ this.state.currentDateTime }</p>
                    </div>
                </div>

                <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>
                    <input className='form-control' type='search' placeholder='Search' name='searchQuery' onChange={this.handleSearchArea}>
                    </input>
                </div>
                <div className='text-right mb-2 mr-5'>
                    <ReactToPrint
                        trigger={()=>{
                        return <button className="btn btn-danger" > Download Report </button>
                        }}
                        content={()=>this.componentRef}
                        documentTitle = 'Current Stock Report'
                        pageStyle= "print"
                    />
                </div>         

                <div className='col mt-4 mb-5'>
                                <div id="div3" className = "row ">
                                        <table className = "table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className='text-center'> Request ID </th>
                                                    <th className='text-center'> Item Code </th>
                                                    <th className='text-center'> Item Name </th>
                                                    <th className='text-center'> Status </th>
                                                    <th className='text-center'> Lot Quantity </th>
                                                    <th className='text-center'> View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.supplyRequests.map(
                                                        supplyRequest => 
                                                        <tr key = {supplyRequest.requestID}>
                                                            <td className='text-center'> {supplyRequest.requestID} </td>  
                                                            <td> {supplyRequest.itemCode} </td>   
                                                            <td> {supplyRequest.itemName}</td>
                                                            <td className='text-center'> Pending Approval </td>    
                                                            <td className='text-center'> {supplyRequest.lotQuantity}</td>
                                                            
                                                            <td>
                                                            <div id='btnView'>
                                                                <button className="buttonView" style={{ verticalAlign: "middle" }} onClick={ () => this.viewSupplyRequest(supplyRequest.requestID)}><span>View</span></button>
                                                            </div>
                                                            </td>
                                                            
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                </div>
                        </div>
        </div>
   </div>
    )
  }
}
export default CurrentSupplyRequestsReportComponent