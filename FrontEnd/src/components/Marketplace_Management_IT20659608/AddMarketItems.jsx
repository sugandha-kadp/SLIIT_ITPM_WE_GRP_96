import React, { Component } from 'react';
import MarketPlaceService from '../../services/MarketPlaceService';
import HeaderComponent from './HeaderComponent';
import swal from 'sweetalert';

export default class AddMarketItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      sku: '',
      itemQuentity: '',
      itemPrice: '',
      itemDescription: '',
      itemImage: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      const {
        itemName,
        sku,
        itemQuentity,
        itemPrice,
        itemDescription,
        itemImage
      } = this.state;

      const marketItem = {
        itemName: itemName,
        sku: sku,
        itemQuentity: itemQuentity,
        itemPrice: itemPrice,
        itemDescription: itemDescription,
        itemImage: itemImage
      };

      MarketPlaceService.addMarketItemRequest(marketItem)
        .then((res) => {
          this.props.history.push('/Current-MarketPlaceReport');
          swal('Market Item Added!', 'New market item successfully added to the system.', 'success');
        })
        .catch((error) => {
          console.log('Error adding market item:', error);
          swal('Error', 'An error occurred while adding the market item.', 'error');
        });
    }
  }

  handleCancel() {
    this.props.history.push('/Current-MarketPlaceReport');
  }

  validateForm() {
    const {
      itemName,
      sku,
      itemQuentity,
      itemPrice,
      itemDescription
    } = this.state;

    let errors = {};
    let isValid = true;

    if (!itemName || itemName.trim() === '') {
      errors.itemName = 'Item Name is required';
      isValid = false;
    }

    if (!sku || sku.trim() === '') {
      errors.sku = 'SKU is required';
      isValid = false;
    }

    if (!itemQuentity || itemQuentity.trim() === '') {
      errors.itemQuentity = 'Item Quentity is required';
      isValid = false;
    }

    if (!itemPrice || itemPrice.trim() === '') {
      errors.itemPrice = 'Item Price is required';
      isValid = false;
    }

    if (!itemDescription || itemDescription.trim() === '') {
      errors.itemDescription = 'Item Description is required';
      isValid = false;
    }

    this.setState({ errors: errors });
    return isValid;
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Market Item</h3>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Item Name:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.itemName ? 'is-invalid' : ''}`}
                      name="itemName"
                      value={this.state.itemName}
                      onChange={this.handleChange}
                    />
                    {errors.itemName && <div className="invalid-feedback">{errors.itemName}</div>}
                  </div>

                  <div className="form-group">
                    <label>SKU:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.sku ? 'is-invalid' : ''}`}
                      name="sku"
                      value={this.state.sku}
                      onChange={this.handleChange}
                    />
                    {errors.sku && <div className="invalid-feedback">{errors.sku}</div>}
                  </div>

                  <div className="form-group">
                    <label>Item Quantity:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.itemQuentity ? 'is-invalid' : ''}`}
                      name="itemQuentity"
                      value={this.state.itemQuentity}
                      onChange={this.handleChange}
                    />
                    {errors.itemQuentity && <div className="invalid-feedback">{errors.itemQuentity}</div>}
                  </div>

                  <div className="form-group">
                    <label>Item Price:</label>
                    <input
                      type="text"
                      className={`form-control ${errors.itemPrice ? 'is-invalid' : ''}`}
                      name="itemPrice"
                      value={this.state.itemPrice}
                      onChange={this.handleChange}
                    />
                    {errors.itemPrice && <div className="invalid-feedback">{errors.itemPrice}</div>}
                  </div>

                  <div className="form-group">
                    <label>Item Description:</label>
                    <textarea
                      className={`form-control ${errors.itemDescription ? 'is-invalid' : ''}`}
                      name="itemDescription"
                      value={this.state.itemDescription}
                      onChange={this.handleChange}
                    ></textarea>
                    {errors.itemDescription && <div className="invalid-feedback">{errors.itemDescription}</div>}
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
