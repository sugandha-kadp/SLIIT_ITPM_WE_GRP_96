import React, { Component } from 'react'
import SupplyRequestService from '../../services/SupplyRequestService';
import HeaderComponent from './HeaderComponent';
import swal from 'sweetalert';

export default class AddSupplyRequestComponnent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: {},
            eritemCode: '',
            eritemName: '',
            erdescription: '',
            erprice:'',
            erlotQuantity:'',

            itemCode: '',
            itemName: '',
            description: '',
            lotQuantity:'',
            images1:''

        }
        //bind all value change handler 
        this.changeitemCodeHandler = this.changeitemCodeHandler.bind(this);
        this.changeitemNameHandler = this.changeitemNameHandler.bind(this);
        this.changedescriptionHandler = this.changedescriptionHandler.bind(this);
        this.changelotQuantityHandler = this.changelotQuantityHandler.bind(this);

        this.addSupplyRequest = this.addSupplyRequest.bind(this);
        this.approveSupplyRequestReport = this.approveSupplyRequestReport.bind(this);
        this.rejectSupplyRequestReport = this.rejectSupplyRequestReport.bind(this);
        this.currentSupplyRequestReport= this.currentSupplyRequestReport.bind(this);
    }


    itemImageHandler = (event) => {
        const imageFile = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          const base64String = e.target.result;
          this.setState({ images1: base64String });
        };
    
        reader.readAsDataURL(imageFile);
      };
    
      removeImage = () => {
        this.setState({ images1: "" });
      };

    viewStockItem(requestID){
        this.props.history.push(`/view-stockItem/${requestID}`);
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
    //Implemnent functions to get Changed value and set those values to this.state in new object
    changeitemCodeHandler= (event) => {
        this.setState({itemCode: event.target.value});
    }
    changeitemNameHandler= (event) => {
        this.setState({itemName: event.target.value});
    }
    changedescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changelotQuantityHandler= (event) => {
        this.setState({lotQuantity: event.target.value});
    }

    handleSubmit = event => {
           event.preventDefault();

        let errors = this.validateAll();
        if (this.isValid(errors)){

            let supplyRequest = {itemCode: this.state.itemCode, itemName: this.state.itemName, description: this.state.description, lotQuantity: this.state.lotQuantity, images1: this.state.images1, images2: this.state.images2, images3: this.state.images3};
            console.log('supplyRequest => ' + JSON.stringify(supplyRequest));

         //API call with newly created Stock Item Object
         SupplyRequestService.addSupplyRequest(supplyRequest).then(res =>{
            this.props.history.push('/SupplyRequest');
            swal("Supply Request Added !", "New Supply Request successfully added to System ", "success")
         })
        }
        else{
            let s1 ={...this.state};
            s1.errors = errors;
            this.setState(s1);
        }
    }

    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr) => errors[curr] ? acc+1 : acc,0);

        return count === 0;
    }

    //Implement Validation For All Input Fileds
    validateAll = () => {
        
        let itemCode1 = this.state.itemCode;
        let itemName1 =this.state.itemName;
        let description1 = this.state.description;
        let lotQuantity1 = this.state.lotQuantity;
       
        let errors = {};

        if (!itemCode1 || itemCode1 ===" " ) 
        {
        this.state.eritemCode ="Item Code is Required";
        console.log(this.state.eritemCode);
        errors.itemCode ="Item Code is Required"; 
        }
        else{
            this.state.eritemCode ="";
        }

        if (!itemName1 || itemName1 ===" ")
        {
        this.state.eritemName ="Item Name is Required";
        errors.itemName ="Item Name is Required";
        }
        else{
            this.state.eritemName ="";
        }

        if (!description1 || description1 === " ")
        {
        this.state.erdescription ="Description is Required";
        errors.description ="Description is Required";
        }
        else{
            this.state.erdescription ="";
        }

        if (!lotQuantity1 || lotQuantity1 === " "){
        this.state.erlotQuantity ="Lot Quantity is Required";
        errors.lotQuantity ="Lot Quantity is Required";
        return errors;
        }
        else{
            this.state.erlotQuantity ="";
        }  
        return errors;
   
    }

    handleCancel = event => {
        this.props.history.push('/SupplyRequest');
    }

  render() {
    const { images1 } = this.state;
    // let {items,errors} = this.state;
    return (
        <div>   
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
            <br></br>
               <div id='divView2' >
                    <div className = "row">
                        <div id='addStock1' className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Supply Request</h3>
                            <div className = "card-body">
                                
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                    <label> Item Code: </label>
                                            <input placeholder='Item Code' name='itemCode' className='form-control' 
                                                value={this.state.itemCode} onChange={this.changeitemCodeHandler}/>
                                               <small className='text-danger'>{this.state.eritemCode} </small>
                                    </div>
                                    <div className='form-group'>
                                    <label> Item Name: </label>
                                            <input placeholder='Item Name' name='itemName' className='form-control' 
                                                value={this.state.itemName} onChange={this.changeitemNameHandler}/>
                                                <small className='text-danger'>{this.state.eritemName} </small>
                                    </div>
                                    <div className='form-group'>
                                    <label> Description: </label>
                                            <textarea  placeholder='Description' name='description' className='form-control' 
                                                value={this.state.description} onChange={this.changedescriptionHandler}/>
                                                <small className='text-danger'>{this.state.erdescription} </small>
                                    </div>
                                    
                                    <div className='form-group'>
                                    <label> Lot Quantity: </label>
                                            <input type='number' min="1" placeholder='Lot Quantity' name='lotQuantity' className='form-control' 
                                                value={this.state.lotQuantity} onChange={this.changelotQuantityHandler}/>
                                                <small className='text-danger'>{this.state.erlotQuantity} </small>
                                    </div>

                                    <div className="form-group">
                                        <label>Image</label>
                                        {images1 && (

                                        <div className="text-center mb-3">
                                            <img src={this.state.images1} className="rounded" alt="Image of the item" style={{ width: "450px", height: "400px" }} />
                                        </div>

                                        )}
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    name="images1"
                                                    className="custom-file-input"
                                                    onChange={this.itemImageHandler}
                                                />
                                                <label className="custom-file-label">
                                                    Choose file
                                                </label>
                                            </div>
                                            {images1 && (
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={this.removeImage}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>



                                    {/* Imperlment tw0 butto */}
                                    <div className = "form-group text-center mt-4 ">
                                    <button style={{marginLeft: "10px"}} className="btn btn-success " onClick={this.handleSubmit}>Save</button>
                                    <button style={{marginLeft: "50px"}} className="btn btn-danger" onClick={this.handleCancel} >Cancel</button>                                   
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
