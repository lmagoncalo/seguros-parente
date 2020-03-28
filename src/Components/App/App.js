import React, { Component } from 'react';
import './App.css';
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Simulation from "../Simulation/Simulation";
import Footer from "../Footer/Footer";
import {Nav, Navbar} from "react-bootstrap";
import {getTextColor} from "../../Colors";
import {getMenuTop, getPadding, getTitleSize} from "../../Utils";


//<Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">

class App extends Component{
    render() {
        const nav_bar={
            fontVariant: "small-caps",
            color: getTextColor(),
            //fontFamily: "Text-Medium",

        }

        const menu_app = {
            fontFamily: 'Medium',
            fontSize: "15px",
            marginTop: "30px",
            paddingRight: getPadding(),
        }

        return (
            <div>
                <Navbar style={menu_app}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link style={nav_bar} href="#home">SOBRE NÓS</Nav.Link>
                            <Nav.Link style={nav_bar} href="#classes">FROTA</Nav.Link>
                            <Nav.Link style={nav_bar} href="#simulation">PEDIR SIMULAÇÃO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Home id="home"/>
                <Classes id="classes"/>
                <Simulation id="simulation"/>
                <Footer/>
            </div>
        );
    }
}

export default App;
