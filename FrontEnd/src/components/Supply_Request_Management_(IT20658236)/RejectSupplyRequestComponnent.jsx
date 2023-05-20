import React, { Component } from 'react'
import SupplyRequestService from '../../services/SupplyRequestService';
import HeaderComponent from './HeaderComponent';
import swal from 'sweetalert';

class RejectSupplyRequestComponnent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requestID: this.props.match.params.requestID,
            itemCode: '',
            itemName: '',
            description: '',
            lotQuantity: '',
            images1: '',

            supplyRequests : []
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
    approveSupplyRequest(requestID) {
        this.props.history.push(`/approve-supplyRequest/${requestID}`)

    }


    rejectSupplyRequest = (requestID) => {

            SupplyRequestService.rejectSupplyRequest(requestID).then(res => {
                swal("Request Rejected!", "Request successfully Rejected ", "success");  
                this.refreshStock();          
                this.props.history.push('/supplyRequest');             
            });
            this.props.history.push('/supplyRequest');   

    }

        //function to refresh the web page
        refreshStock(){
            this.props.history.push('/supplyRequest');
        }
    

    componentDidMount() {
        SupplyRequestService.getSupplyRequest().then((res) => {
            this.setState({ supplyRequests: res.data});
        });

        SupplyRequestService.getSupplyRequestById(this.state.requestID).then((res) => {
            let supplyRequest = res.data;
            this.setState({
                itemCode: supplyRequest.itemCode,
                itemName: supplyRequest.itemName,
                description: supplyRequest.description,
                lotQuantity: supplyRequest.lotQuantity,
                images1: supplyRequest.images1
            });
        });
    }
    
        //Cancel Button Function
        handleCancel = event => {
            this.props.history.push('/supplyRequest');
        }
    

    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div id="div1" >
                    <div id="div4">
                        <div id='sb1'>
                            <img alt="" src={require("../../images/add.png")} width="85" height="80" className="d-inline-block align-top" />
                        </div>

                        <div id='sb2'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.addSupplyRequest}> <span>Add Supply Request</span></button>
                        </div>

                        <div id='sb3'>
                            <img alt="" src={require("../../images/report.png")} width="85" height="80" className="d-inline-block align-top" />
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

                <br></br>
                <div id="divView2" >

                    {/* <div id='addStock'> */}
                    <div className="row">
                        <div id='addStock1' className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Reject Supply Request </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> itemCode : </label>
                                        <input name="itemCode" className="form-control"
                                            value={this.state.itemCode} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label> itemName: </label>
                                        <input name="itemName" className="form-control"
                                            value={this.state.itemName} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label> description: </label>
                                        <textarea name="description" className="form-control"
                                            value={this.state.description} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label> lotQuantity: </label>
                                        <input name="lotQuantity" className="form-control"
                                            value={this.state.lotQuantity} disabled />
                                    </div>
                                    
                                    <div className="text-center mb-3">
                                        <img src={this.state.images1} className="rounded" alt="..." style={{ width: "450px", height: "400px" }} />
                                    </div>

                                    <div className="form-group text-center">
                                        <button style={{ marginLeft: "10px" }} onClick = { () => this.rejectSupplyRequest(this.state.requestID)} className="btn btn-danger ">Reject Request</button>
                                        <button style={{ marginLeft: "50px" }}onClick={this.handleCancel} className="btn btn-warning">Cancel</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default RejectSupplyRequestComponnent