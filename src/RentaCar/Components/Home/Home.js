import React, { Component } from 'react';
import {translate} from "../../../Languages/Language_Handler";
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="menu_home">
                    <h1 className="title_home"> · Vila Praia de Âncora <br/> {translate("home.title")} <span className="italic_home">Rent a car!</span></h1>
                <p className="text_home"> {translate("home.info1")} <span className="italic_home">Rent a car</span> {translate("home.info2")} </p>
            </div>
        );
    }
}

export default Home;
