import React, { Component } from 'react'
import SupplyRequestService from '../../services/SupplyRequestService';
import '../../App.css';
import AdvertisementService from '../../services/AdvertisementService';

class Advertisement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            AdvertisementServices: []
        }

    }
    componentDidMount() {
        AdvertisementService.getAdvertisement().then((res) => {
            this.setState({ AdvertisementServices: res.data });
        });
    }

    render() {
        return (
            <div >
                <h1 className="text-center "> Advertisements </h1>
                <div className='col mt-4 mb-5'>
                    <div id="div3" className="row ">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th className='text-center'> Adver </th>
                                    <th className='text-center'> itemName </th>
                                    <th className='text-center'> description </th>
                                    <th className='text-center'> unitPrice </th>
                                    <th className='text-center'> quantity </th>
                                    <th className='text-center'> images</th>
                                    <th className='text-center'> contactPersonName</th>
                                    <th className='text-center'> contactPersonNumber</th>
                                    <th className='text-center'> contactPersonEmail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.SupplyRequestServices.map(
                                        supplyRequest =>
                                            <tr key={supplyRequest.supplyRequestID}>
                                                <td className='text-center'> {supplyRequest.supplyRequestID} </td>
                                                <td> {supplyRequest.itemName} </td>
                                                <td> {supplyRequest.description}</td>
                                                <td> {supplyRequest.unitPrice} </td>
                                                <td> {supplyRequest.quantity}</td>
                                                <td> {supplyRequest.images} </td>
                                                <td> {supplyRequest.contactPersonName}</td>
                                                <td> {supplyRequest.contactPersonNumber} </td>
                                                <td> {supplyRequest.contactPersonEmail}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
export default ListSupplyRequestComponent