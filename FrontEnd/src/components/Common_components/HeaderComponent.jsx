import React, { Component } from 'react'
import swal from 'sweetalert';
import {Link,withRouter} from "react-router-dom";
// import {logo} from "../images/logo.png"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div header class="header">
            <div id='hdLogo'>
                <img alt="Logo"  src={require("../../images/logo.png")} width="110"  height="63" className="d-inline-block align-top" />          
                <a href="#" class="logo"> <span>Wast</span>Not </a>
            </div>
            <div id='hdNav'>
                <nav class="navbar">
                    <a href="#home">Home</a>
                    <a href="#home">Home</a>
                    <a href="#home">Home</a>
                    <a href="#home">Home</a>
                    <a href="#home">Home</a>
                    <a href="#home">Home</a>
                </nav>
            </div>
            </div>
        )
    }
}

export default withRouter(HeaderComponent)
