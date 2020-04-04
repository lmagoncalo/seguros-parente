import React, { Component } from 'react';
import './SegurosApp.css';
import {getMenuColor, getPrimaryColorFinal, getTextColor} from "../../../Colors";
import {getPadding} from "../../../RentaCar/Utils";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";


class SegurosApp extends Component{
        render() {
            return (
                <div>
                    <div id='home'>
                        <Home name="home"/>
                    </div>

                    <Footer/>
                </div>
            );

    }
}

export default SegurosApp;

