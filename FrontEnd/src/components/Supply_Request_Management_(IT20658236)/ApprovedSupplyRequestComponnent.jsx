import React, { Component } from 'react'
import SupplyRequestService from '../../services/SupplyRequestService'
import HeaderComponent from './HeaderComponent';
import swal from 'sweetalert';

class ApprovedSupplyRequestComponnent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requestID: this.props.match.params.requestID,
            itemCode: '',
            itemName: '',
            description: '',
            price: '',
            lotQuantity: '',
            images1: '',

            errors: {},
            erprice: ''

        }
        //bind all value change handler methods
        this.changepriceHandler = this.changepriceHandler.bind(this);

        this.approveSupplyRequestReport = this.approveSupplyRequestReport.bind(this);
        this.addSupplyRequest = this.addSupplyRequest.bind(this);
        this.rejectSupplyRequestReport = this.rejectSupplyRequestReport.bind(this);
        this.currentSupplyRequestReport = this.currentSupplyRequestReport.bind(this);

    }

    addSupplyRequest() {
        this.props.history.push('/add-supplyRequest');
    }

    currentSupplyRequestReport() {
        this.props.history.push('/current-supplyRequests-report');
    }


    approveSupplyRequestReport(){
        this.props.history.push('/approved-SupplyRequest-report');
    }
    

    rejectSupplyRequestReport(){
        this.props.history.push('/reject-SupplyRequest-report');
    }

    //Implemnent functions to get Changed value and set those values to this.state in new object

    changepriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    //Implement Approve Supply Request function
    approveSupplyRequest = (e) => {
        e.preventDefault();

        let errors = this.validateAll();
        if (this.isValid(errors)) {

            let supplyRequest = { itemCode: this.state.itemCode, itemName: this.state.itemName, description: this.state.description, price: this.state.price, lotQuantity: this.state.lotQuantity };
            console.log('supplyRequest => ' + JSON.stringify(supplyRequest));
            console.log('supplyRequest => ' + JSON.stringify(this.state.supplyRequest));

            //Call api with updated values
            SupplyRequestService.approveSupplyRequest(supplyRequest, this.state.requestID).then(res => {
                this.props.history.push('/supplyRequest');
                this.navigateToApprovedQuatation(this.state.requestID);

                swal("Request Approved!", "Request successfully Approved ", "success");

            });
        }
        else {
            let s1 = { ...this.state };
            s1.errors = errors;
            this.setState(s1);
        }
    }

    navigateToApprovedQuatation(requestID) {
        this.props.history.push('/approved-quotation/' + requestID);
    }
    



    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce((acc, curr) => errors[curr] ? acc + 1 : acc, 0);

        return count === 0;
    }

    //Implement Validation For All Input Fileds
    validateAll = () => {

        let price1 = this.state.price;
        let errors = {};


        if (!price1 || price1 === " ") {
            this.state.erprice = "Price is Required";
            errors.price = "Price is Required";
        }
        else {
            this.state.erprice = "";
        }

        return errors;

    }


    //Get Values From Data base through API and set valus to input fileds
    componentDidMount() {
        SupplyRequestService.getSupplyRequestById(this.state.requestID).then((res) => {
            let supplyRequest = res.data;
            this.setState({
                itemCode: supplyRequest.itemCode,
                itemName: supplyRequest.itemName,
                description: supplyRequest.description,
                price: supplyRequest.price,
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
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.addStockItem}> <span>Add Items</span></button>
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
                <div id='divView2' >
                    <div className="row">
                        <div id='addStock1' className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Approve Stock Item</h3>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label> Item Code: </label>
                                        <input placeholder='Item Code' name='itemCode' className='form-control'
                                            value={this.state.itemCode} disabled />

                                    </div>
                                    <div className='form-group'>
                                        <label> Item Name: </label>
                                        <input placeholder='Item Name' name='itemName' className='form-control'
                                            value={this.state.itemName} disabled />

                                    </div>
                                    <div className='form-group'>
                                        <label> Description: </label>
                                        <textarea placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} disabled />

                                    </div>
                                    <div className='form-group'>
                                        <label> Price: </label>
                                        <input placeholder='Price' name='price' className='form-control'
                                            value={this.state.price} onChange={this.changepriceHandler} />
                                        <small className='text-danger'>{this.state.erprice} </small>
                                    </div>
                                    <div className='form-group'>
                                        <label> Lot Quantity: </label>
                                        <input placeholder='Lot Quantity' name='lotQuantity' className='form-control'
                                            value={this.state.lotQuantity} disabled />
                                    </div>

                                    <div className="form-group text-center mt-4 ">
                                        <button style={{ marginLeft: "10px" }} className="btn btn-primary" onClick={this.approveSupplyRequest}>Update & Approve</button>
                                        <button style={{ marginLeft: "50px" }} className="btn btn-danger" onClick={this.handleCancel} >Cancel</button>
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
export default ApprovedSupplyRequestComponnent