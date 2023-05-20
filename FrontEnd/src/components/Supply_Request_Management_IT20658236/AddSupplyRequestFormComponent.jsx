import React, { Component } from 'react';
import SupplyRequestService from '../../services/SupplyRequestService';

<<<<<<< HEAD
export default class AddSupplyRequestFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      supplyRequestID: '',
      itemName: '',
      description: '',
      unitPrice: '',
      quantity: '',
      images: '',
      contactPersonName: '',
      contactPersonNumber: '',
      contactPersonEmail: '',
    };
  }

  supplyRequestIDHandler = (event) => {
    this.setState({ supplyRequestID: event.target.value });
  };

  itemNameHandler = (event) => {
    this.setState({ itemName: event.target.value });
  };

  descriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  unitPriceHandler = (event) => {
    this.setState({ unitPrice: event.target.value });
  };

  quantityHandler = (event) => {
    this.setState({ quantity: event.target.value });
  };

  imagesHandler = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64String = e.target.result;
      this.setState({ images: base64String });
    };

    reader.readAsDataURL(imageFile);
  };

  removeImage = () => {
    this.setState({ images: '' });
  };

  contactPersonNameHandler = (event) => {
    this.setState({ contactPersonName: event.target.value });
  };

  contactPersonNumberHandler = (event) => {
    this.setState({ contactPersonNumber: event.target.value });
  };

  contactPersonEmailHandler = (event) => {
    this.setState({ contactPersonEmail: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let supplyRequest = {
      supplyRequestID: this.state.supplyRequestID,
      itemName: this.state.itemName,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
      images: this.state.images,
      contactPersonName: this.state.contactPersonName,
      contactPersonNumber: this.state.contactPersonNumber,
      contactPersonEmail: this.state.contactPersonEmail,
    };

    console.log('supplyRequest => ' + JSON.stringify(supplyRequest));

    // API call with newly created Supply request Object
    SupplyRequestService.addSupplyRequest(supplyRequest).then((res) => {
      this.props.history.push('/SupplyRequest');
      alert('Supply Request added!', 'New Supply Request successfully added to System', 'success');
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Add Supply Request</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Supply Request ID:
            <input
              type="text"
              name="supplyRequestID"
              value={this.state.supplyRequestID}
              onChange={this.supplyRequestIDHandler}
            />
          </label>
          <br />
          <label>
            Item Name:
            <input
              type="text"
              name="itemName"
              value={this.state.itemName}
              onChange={this.itemNameHandler}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.descriptionHandler}
            />
          </label>
          <br />
          <label>
            Unit Price:
            <input
              type="text"
              name="unitPrice"
              value={this.state.unitPrice}
              onChange={this.unitPriceHandler}
            />
          </label>
          <br />
          <label>
            Quantity:
            <input
              type="text"
              name="quantity"
              value={this.state.quantity}
              onChange={this.quantityHandler}
            />
          </label>
          <br />
          <label>
            Images:
            <input type="file" accept="image/*" onChange={this.imagesHandler} />
          </label>
          <br />
          {this.state.images && (
            <div>
              <img
                src={this.state.images}
                alt="Uploaded"
                style={{ width: '100px', height: '100px' }}
              />
              <button type="button" onClick={this.removeImage}>
                Remove
              </button>
            </div>
          )}
          <br />
          <label>
            Contact Person Name:
            <input
              type="text"
              name="contactPersonName"
              value={this.state.contactPersonName}
              onChange={this.contactPersonNameHandler}
            />
          </label>
          <br />
          <label>
            Contact Person Number:
            <input
              type="text"
              name="contactPersonNumber"
              value={this.state.contactPersonNumber}
              onChange={this.contactPersonNumberHandler}
            />
          </label>
          <br />
          <label>
            Contact Person Email:
            <input
              type="text"
              name="contactPersonEmail"
              value={this.state.contactPersonEmail}
              onChange={this.contactPersonEmailHandler}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
=======
class AddSupplyRequestFormComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AddSupplyRequestFormComponent;
>>>>>>> 79591a10c4c45013ce1a82d56d1773dc932b66e0
