import React, { Component } from 'react';
import './RentaCarApp.css';
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Simulation from "../Simulation/Simulation";
import Footer from "../Footer/Footer";
import {Nav, Navbar} from "react-bootstrap";
import {getTextColor,getPrimaryColorFinal,getPrimaryColor,getMenuColorFinal,getMenuColor} from "../../../Colors";
import {getPadding} from "../../Utils";

class RentaCarApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'home',
        };
    }

    setSelected(new_name){
        this.setState({name: new_name})
    }

    isSelected(new_name){
        return this.state.name === new_name;

    }

    render() {
        const line_class={
            margin: "auto",
            marginTop: "6px",
            border: "1.2px solid " + getPrimaryColorFinal()
        };

        const nav_bar={
            fontVariant: "small-caps",
            color: getTextColor(),
            fontFamily: "Text_Bold",
            fontSize: "14px",
            letterSpacing: "1.5px",
            marginLeft:"6px"
        };

        const divMenu_app = {
            backgroundImage: "linear-gradient(rgba("+getMenuColor()+ ",1), rgba("+getMenuColor()+",0.6),rgba("+getMenuColor()+",0.3), rgba("+getMenuColor()+",0.1), rgba("+getMenuColor()+",0) )",
        //    backgroundImage: "linear-gradient("+getPrimaryColor()+ ",1), rgba("+getPrimaryColor()+",0.6),rgba("+getPrimaryColor()+",0.3), rgba("+getPrimaryColor()+",0.1), rgba("+getPrimaryColor()+",0) )",
            borderWidth:"0px",
            margin:"0",
            width:"100%",
            padding:"0",
            paddingBottom:"20px"
        };

        const menu_app = {
            margin:"0",
            fontSize: "15px",
            marginTop: "20px",
            paddingRight: getPadding(),
        };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top"  style={divMenu_app}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"style={{borderWidth: "0px"}} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav style={menu_app} >
                        <Nav.Link style={nav_bar} onClick={() => this.setSelected('home')} href="#home">SOBRE NÓS {this.isSelected('home') ? <hr style={line_class} /> : <div/>} </Nav.Link>
                        <Nav.Link style={nav_bar} onClick={() => this.setSelected('classes')} href="#classes">FROTA {this.isSelected('classes') ? <hr style={line_class} /> : <div/>}</Nav.Link>
                        <Nav.Link style={nav_bar} onClick={() => this.setSelected('simulation')} href="#simulation">PEDIR SIMULAÇÃO {this.isSelected('simulation') ? <hr style={line_class} /> : <div/>}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div id='home'>
                <Home name="home"/>
            </div>
            <div id='classes'>
                <Classes name="classes"/>
            </div>
            <div id='simulation'>
                <Simulation name="simulation"/>
            </div>
            <Footer/>
        </div>
    );
}
}

export default RentaCarApp;
