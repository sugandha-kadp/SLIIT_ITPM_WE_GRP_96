import React, { Component } from 'react'
import '../../App.css';
import HeaderComponent from './HeaderComponent';
import SupplyRequestService from '../../services/SupplyRequestService';

class ListSupplyRequestComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            supplyRequests: [],
        }
        this.addSupplyRequest = this.addSupplyRequest.bind(this);
        this.approveSupplyRequestReport = this.approveSupplyRequestReport.bind(this);
        this.rejectSupplyRequestReport = this.rejectSupplyRequestReport.bind(this);
        this.currentSupplyRequestReport= this.currentSupplyRequestReport.bind(this);
        
    }

    viewSupplyRequest(requestID){
        this.props.history.push(`/view-supplyRequest/${requestID}`);
    }

    addSupplyRequest(){
        this.props.history.push('/add-supplyRequest');
    }

    currentSupplyRequestReport(){
        this.props.history.push('/current-supplyRequests-report');
    }

    approveSupplyRequestReport(){
        this.props.history.push('/approved-SupplyRequest-report');
    }

    rejectSupplyRequestReport(){
        this.props.history.push('/reject-SupplyRequest-report');
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
            <div >
                <HeaderComponent></HeaderComponent>
                <div  id="div1" >
                    <div  id="div4">
                        <div id='sb1'>
                            <img alt=""  src={require("../../images/add.png")} width="85"  height="80" className="d-inline-block align-top" />
                        </div>

                        <div id='sb2'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.addSupplyRequest}> <span>Add Supply Request</span></button> 
                        </div>

                        <div id='sb3'>
                        <img alt=""  src={require("../../images/report.png")} width="85"  height="80" className="d-inline-block align-top" />
                        </div>

                        <div id='sb4'>
                        <h4 className='text-light'><u>Genarate Reports</u></h4>
                        </div>

                        <div id='sb5'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.currentSupplyRequestReport}> <span>Curreent Requests</span></button>
                        </div>
                                
                        <div id='sb6'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.approveSupplyRequestReport}> <span>Approved Requests</span></button>
                        </div>

                        <div id='sb7'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.rejectSupplyRequestReport}> <span>Rejected Requests</span></button>
                        </div>
                        </div>
                </div>



                    <div id="div2" >
                        <div id='div5'>
                            <h1 className="text-center ">Supply Request Management</h1>
                        </div>
                        <div id='div6'>
                                <input className='form-control bg-light' type='search' placeholder='Search' name='searchQuery' onChange={this.handleSearchArea}></input>
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

export default ListSupplyRequestComponent
