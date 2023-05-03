import React, { Component } from 'react';
import SupplyRequestService from '../../services/SupplyRequestService';

class ViewSupplyRequestComponent extends Component {
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
      }
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
    const { supplyRequest } = this.state;

    return (
      <div>
        {/* <HeaderComponent></HeaderComponent> */}
        <div id="div1" >
          <div id="div4">
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

        <br />

        <div id="divView2">
          <div className="row">
            <div id="addStock1" className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">View Supply Request</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Supply Request ID:</label>
                    <p>{supplyRequest.supplyRequestID}</p>
                  </div>

                  <div className="form-group">
                    <label>Item Name:</label>
                    <p>{supplyRequest.itemName}</p>
                  </div>

                  <div className="form-group">
                    <label>Description:</label>
                    <p>{supplyRequest.description}</p>
                  </div>
                  <div className="form-group">
                    <label>Unit Price:</label>
                    <p>{supplyRequest.unitPrice}</p>
                  </div>

                  <div className="form-group">
                    <label>Quantity:</label>
                    <p>{supplyRequest.quantity}</p>
                  </div>

                  <div className="form-group">
                    <label>Contact Person:</label>
                    <p>{supplyRequest.contactPersonName}</p>
                  </div>

                  <div className="form-group">
                    <label>Contact Number:</label>
                    <p>{supplyRequest.contactPersonNumber}</p>
                  </div>

                  <div className="form-group">
                    <label>Contact Email:</label>
                    <p>{supplyRequest.contactPersonEmail}</p>
                  </div>

                  <div className="form-group">
                    <label>Item Image:</label>
                    <img
                      src={supplyRequest.images}
                      alt="Item Image"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewSupplyRequestComponent;