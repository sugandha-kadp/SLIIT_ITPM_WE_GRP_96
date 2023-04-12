import React, { Component } from 'react'
import '../../App.css';
import MarketPlaceService from '../../services/MarketPlaceService';

class MarketPlaceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            MarketItems: []
        }

    }
    componentDidMount() {
        MarketPlaceService.getMarketItemRequest().then((res) => {
            this.setState({ MarketItems: res.data });
        });
    }

    render() {
        return (
            <div >
                <h1 className="text-center ">MARKET PLACE</h1>
                <div className='col mt-4 mb-5'>
                    <div id="div3" className="row ">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th className='text-center'> marketItemsID </th>
                                    <th className='text-center'> productName </th>
                                    <th className='text-center'> images </th>
                                    <th className='text-center'> stock </th>
                                    <th className='text-center'> itemCode </th>
                                    <th className='text-center'> price</th>
                                    <th className='text-center'> description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.MarketItems.map(
                                        marketItem =>
                                            <tr key={marketItem.marketItemsID}>
                                                <td className='text-center'> {marketItem.marketItemsID} </td>
                                                <td> {marketItem.productName} </td>
                                                <td> {marketItem.images}</td>
                                                <td> {marketItem.stock} </td>
                                                <td> {marketItem.itemCode}</td>
                                                <td> {marketItem.price} </td>
                                                <td> {marketItem.description}</td>
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
export default MarketPlaceComponent