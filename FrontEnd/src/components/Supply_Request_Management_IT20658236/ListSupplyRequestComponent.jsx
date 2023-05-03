import React, { Component } from 'react';
import SupplyRequestService from '../../services/SupplyRequestService';
import '../../App.css';

class ListSupplyRequestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            supplyRequests: []
        };

        this.viewSupplyRequest = this.viewSupplyRequest.bind(this);
    }

    componentDidMount() {
        SupplyRequestService.getSupplyRequest().then((res) => {
            this.setState({ supplyRequests: res.data });
        });
    }

    viewSupplyRequest(supplyRequestID) {
        this.props.history.push(`/view-supplyrequest/${supplyRequestID}`);
    }

    render() {
        return (
            <div>
                                {/* <HeaderComponent></HeaderComponent> */}
                                <div  id="div1" >
                        <div  id="div4">
                            <div id='sb1'>
                                {/* <img alt=""  src={require("../../images/add.png")} width="85"  height="80" className="d-inline-block align-top" /> */}
                            </div>

                            <div id='sb2'>
                             {/* <button className="button" style={{ verticalAlign: "middle" }} onClick={this.addStockItem}> <span>Add Items</span></button>  */}
                            </div>

                            <div id='sb3'>
                            {/* <img alt=""  src={require("../../images/report.png")} width="85"  height="80" className="d-inline-block align-top" /> */}
                            </div>

                            <div id='sb4'>
                            <h4 className='text-light'><u>Genarate Reports</u></h4>
                            </div>

                            <div id='sb5'>
                                <button className="button" style={{ verticalAlign: "middle" }} onClick={this.currentStockReport}> <span>Curreent Supply Requests</span></button>
                            </div>
                                 
                            <div id='sb6'>
                                <button className="button" style={{ verticalAlign: "middle" }} onClick={this.stockRecivedReport}> <span>Approved Supply Requests</span></button>
                            </div>

                            <div id='sb7'>
                                <button className="button" style={{ verticalAlign: "middle" }} onClick={this.stockIssuedReport}> <span>Rejected Supply Requests</span></button>
                            </div>
                            </div>
                    </div>


                <div id="div2">
                    <div id="div5">
                        <h1 className="text-center">Supply Requests</h1>
                    </div>
                    <div className="col mt-4 mb-5">
                        <div id="div3" className="row">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">Supply Request ID</th>
                                        <th className="text-center">Item Name</th>
                                        <th className="text-center">Description</th>
                                        <th className="text-center">Unit Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.supplyRequests.map((supplyRequest) => (
                                        <tr key={supplyRequest.supplyRequestID}>
                                            <td className="text-center">{supplyRequest.supplyRequestID}</td>
                                            <td>{supplyRequest.itemName}</td>
                                            <td>{supplyRequest.description}</td>
                                            <td>{supplyRequest.unitPrice}</td>
                                            <td>{supplyRequest.quantity}</td>

                                            <td>
                                                <div id="btnView">
                                                    <button
                                                        className="buttonView"
                                                        style={{ verticalAlign: "middle" }}
                                                        onClick={() => this.viewSupplyRequest(supplyRequest.supplyRequestID)}
                                                    >
                                                        <span>View</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListSupplyRequestComponent;
