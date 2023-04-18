import React, { Component } from 'react';
import HeaderComponent from '../Common_components/HeaderComponent';

class DashBoard extends Component {
    render() {
        return (
            <div>
                <h1>DashBoard</h1>
                <HeaderComponent></HeaderComponent>
                <div id="div1" >
                    <div id="div4">
                        <div id='sb1'>
                            {/* <img alt="" src={require("#")} width="85" height="80" className="d-inline-block align-top" /> */}
                        </div>

                        <div id='sb2'>
                            <button className="button" style={{ verticalAlign: "middle" }} onClick={this.addStockItem}> <span>Add </span></button>
                        </div>

                        <div id='sb3'>
                            {/* <img alt="" src={require("../../images/report.png")} width="85" height="80" className="d-inline-block align-top" /> */}
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

            </div>
        )
    }
}

export default DashBoard;