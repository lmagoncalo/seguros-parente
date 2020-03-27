import React, { Component } from 'react';
import './Footer.css';
import {getColor} from "../../Utils/Colors";

class Footer extends Component {
    render() {
        return (
            <div className='menuFooter'>
                <div className='mail'>seguros@carlosparente.com</div>
                <div>17 265 180 · 258 404 888</div>
            </div>
        );
    }
}

export default Footer;
