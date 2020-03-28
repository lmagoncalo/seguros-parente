import React, { Component } from 'react';
import './Footer.css';
import {getColor} from "../../Colors";

class Footer extends Component {
    render() {
        const menuFooter = {
            height: '200px',
            background: getColor(),
            textAlign: 'center',
            display: 'block',
            color:'white'
        }

        return (
            <div style={menuFooter}>
                <div className='mail'>seguros@carlosparente.com</div>
                <div>17 265 180 · 258 404 888</div>
            </div>
        );
    }
}

export default Footer;
