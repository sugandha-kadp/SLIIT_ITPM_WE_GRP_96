import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import SupplyRequestService from '../../services/SupplyRequestService';
import HeaderComponent from '../Supply_Request_Management_(IT20658236)/HeaderComponent';

class ApprovedQuotation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            requestID: this.props.match.params.requestID,
            itemCode: '',
            itemName: '',
            description: '',
            lotQuantity: '',
            images1: '',
            price: '',
            currentDateTime: Date().toLocaleString()
        }
    } 
    
    componentDidMount() {
        SupplyRequestService.getApprovedSupplyRequestByID(this.state.requestID).then((res) => {
            let supplyRequest = res.data;
            this.setState({
                itemCode: supplyRequest.itemCode,
                itemName: supplyRequest.itemName,
                description: supplyRequest.description,
                lotQuantity: supplyRequest.lotQuantity,
                price: supplyRequest.price,
                images1: supplyRequest.images1
            });
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div ref={(el) => (this.componentRef = el)}>
                    <div id='repG'>
                        <h2 className="text-center mt-4">Approved Supply Request Quatation</h2>
                        <br></br>
                        <div className='text-center'>
                            <b>Quatation Generated Date & Time</b>
                        </div>
                        <div className='text-center'>
                            <p>{this.state.currentDateTime}</p>
                        </div>
                    </div>

                    <div id="repGSearch" className='col-lg-3 mt-2 mb-2 ml-5'>
                        <input className='form-control' type='search' placeholder='Search' name='searchQuery' onChange={this.handleSearchArea}>
                        </input>
                    </div>
                    <div className='text-right mb-2 mr-5'>
                        <ReactToPrint
                            trigger={() => {
                                return <button className="btn btn-danger"> Download Report </button>
                            }}
                            content={() => this.componentRef}
                            documentTitle='Current Stock Report'
                            pageStyle="print"
                        />
                    </div>

                    <div className='col mt-4 mb-5'>
                        <div id="div3" className="row ">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th className='text-center'> Request ID </th>
                                        <th className='text-center'> Item Code </th>
                                        <th className='text-center'> Item Name </th>
                                        <th className='text-center'> Lot Quantity </th>
                                        <th className='text-center'> Price</th>
                                        <th className='text-center'> Status </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'> {this.state.requestID} </td>
                                        <td> {this.state.itemCode} </td>
                                        <td> {this.state.itemName}</td>
                                        <td className='text-center'> {this.state.lotQuantity}</td>
                                        <td> LKR : {this.state.price}</td>
                                        <td className='text-center'> Approved </td>
                                    </tr>
                                </tbody>

                                <div id='qimg'>
                                <img alt=""  src={require("../../images/approved.png")} width="100%"  height="100%" />
                                </div>

                                
                                
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ApprovedQuotation;
