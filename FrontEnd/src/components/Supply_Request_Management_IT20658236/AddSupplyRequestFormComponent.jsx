import React, { Component } from 'react';

class AddSupplyRequestFormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            itemName: '',
            description: '',
            unitPrice: '',
            quantity: '',
            images: '',
            contactPersonName: '',
            contactPersonNumber: '',
            contactPersonEmail: '',

        }
        //bind all value change handler 
        this.changeitemCodeHandler = this.changeitemCodeHandler.bind(this);
        this.changeitemNameHandler = this.changeitemNameHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changelotQuantityHandler = this.changelotQuantityHandler.bind(this);
    }

    //Implemnent functions to get Changed value and set those values to this.state in new object
    changeitemCodeHandler = (event) => {
        this.setState({ itemCode: event.target.value });
    }
    changeitemNameHandler = (event) => {
        this.setState({ itemName: event.target.value });
    }
    changedescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changepriceHandler = (event) => {
        this.setState({ price: +event.target.value });
    }
    changelotQuantityHandler = (event) => {
        this.setState({ lotQuantity: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        let errors = this.validateAll();
        if (this.isValid(errors)) {

            let stockItem = { itemCode: this.state.itemCode, itemName: this.state.itemName, description: this.state.description, price: "LKR. " + this.state.price + ".00", lotQuantity: this.state.lotQuantity };
            console.log('stockItem => ' + JSON.stringify(stockItem));

            //API call with newly created Stock Item Object
            StockItemService.addStockItem(stockItem).then(res => {
                this.props.history.push('/StockItems');
                swal("Item added !", "New Stock Item successfully added to System ", "success");
            })
        }
        else {
            let s1 = { ...this.state };
            s1.errors = errors;
            this.setState(s1);
        }
    }

    handleCancel = event => {
        this.props.history.push('/SupplyRequests');
    }

    render() {

        // let {items,errors} = this.state;
        return (
            <div>
                <div id='divView2' >
                    <div className="row">
                        <div id='addStock1' className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Stock Item</h3>
                            <div className="card-body">

                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label> Item Code: </label>
                                        <input placeholder='Item Code' name='itemCode' className='form-control'
                                            value={this.state.itemCode} onChange={this.changeitemCodeHandler} />
                                        <small className='text-danger'>{this.state.eritemCode} </small>
                                    </div>
                                    <div className='form-group'>
                                        <label> Item Name: </label>
                                        <input placeholder='Item Name' name='itemName' className='form-control'
                                            value={this.state.itemName} onChange={this.changeitemNameHandler} />
                                        <small className='text-danger'>{this.state.eritemName} </small>
                                    </div>
                                    <div className='form-group'>
                                        <label> Description: </label>
                                        <textarea placeholder='Description' name='description' className='form-control'
                                            value={this.state.description} onChange={this.changedescriptionHandler} />
                                        <small className='text-danger'>{this.state.erdescription} </small>
                                    </div>
                                    <div className='form-group'>
                                        <label> Price: </label>
                                        <input type='number' min="1" placeholder='Price' name='price' className='form-control'
                                            value={this.state.price} onChange={this.changepriceHandler} />
                                        <small className='text-danger'>{this.state.erprice} </small>
                                    </div>
                                    <div className='form-group'>
                                        <label> Lot Quantity: </label>
                                        <input type='number' min="1" placeholder='Lot Quantity' name='lotQuantity' className='form-control'
                                            value={this.state.lotQuantity} onChange={this.changelotQuantityHandler} />
                                        <small className='text-danger'>{this.state.erlotQuantity} </small>
                                    </div>
                                    {/* Imperlment tw0 butto */}
                                    <div className="form-group text-center mt-4 ">
                                        <button style={{ marginLeft: "10px" }} className="btn btn-success " onClick={this.handleSubmit}>Save</button>
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
export default AddSupplyRequestFormComponent;