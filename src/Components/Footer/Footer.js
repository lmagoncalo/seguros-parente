import React, { Component } from 'react';
import './Footer.css';
import {getColor} from "../../Colors";

class Footer extends Component {
    render() {
        return (
            <div style={{height: "200px", background: getColor(), textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                <div>SEGUROS@CARLOSPARENTE.COM 917 265 180 · 258 404 888</div>
            </div>
        );
    }
}

export default Footer;
