import React, { Component } from 'react';
import './App.css';
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Simulation from "../Simulation/Simulation";
import Footer from "../Footer/Footer";
import {Nav, Navbar} from "react-bootstrap";

import '../../fonts/AngleciaProDisplay-BoldItalic.otf'
import '../../fonts/AngleciaProDisplay-Medium.otf'
import '../../fonts/AngleciaProText-Bold.otf'
import '../../fonts/AngleciaProText-Medium.otf'

class App extends Component{
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#home">SOBRE NÓS</Nav.Link>
                            <Nav.Link href="#classes">FROTA</Nav.Link>
                            <Nav.Link href="#simulation">PEDIR SIMULAÇÃO</Nav.Link>
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
