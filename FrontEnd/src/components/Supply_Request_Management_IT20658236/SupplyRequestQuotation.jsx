import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import SupplyRequestService from "../../services/SupplyRequestService";

class SupplyRequestQuotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        supplyRequest: {
            supplyRequestID: '',
            itemName: '',
            description: '',
            unitPrice: '',
            quantity: '',
            images: '',
            contactPersonName: '',
            contactPersonNumber: '',
            contactPersonEmail: ''
            },
            
      currentDateTime: Date().toLocaleString(),
    };
  }

  componentDidMount() {
    const supplyRequestID = this.props.match.params.supplyRequestID;

    SupplyRequestService.getSupplyRequestById(supplyRequestID)

      .then((response) => {
        this.setState({ supplyRequest: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-5 mb-5">
                                <div className="card-header">
                                    <h4>Supply Request Quotation</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Supply Request ID: {this.state.supplyRequest.supplyRequestID}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6>Date: {this.state.currentDateTime}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Item Name: {this.state.supplyRequest.itemName}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6>Quantity: {this.state.supplyRequest.quantity}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Unit Price: {this.state.supplyRequest.unitPrice}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6>Supplier Name: {this.state.supplyRequest.supplierName}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Supplier Email: {this.state.supplyRequest.supplierEmail}</h6>
                                        </div>
                                        <div className="col-6">
                                            <h6>Supplier Contact Number: {this.state.supplyRequest.supplierContactNumber}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Supplier Address: {this.state.supplyRequest.supplierAddress}</h6>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>Supplier Quotation: {this.state.supplyRequest.supplierQuotation}</h6>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    
  }
}

export default SupplyRequestQuotation;
