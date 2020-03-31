import React, { Component } from 'react';
import './App.css';
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Simulation from "../Simulation/Simulation";
import Footer from "../Footer/Footer";
import {Nav, Navbar} from "react-bootstrap";
import {getTextColor,getPrimaryColor,getPrimaryColorFinal,getSecundaryColor} from "../../Colors";
import {getPadding} from "../../Utils";


class App extends Component{
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

            backgroundImage: "linear-gradient(rgba("+getSecundaryColor()+ ",1), rgba("+getSecundaryColor()+",0.6),rgba("+getSecundaryColor()+",0.3), rgba("+getSecundaryColor()+",0.1), rgba("+getSecundaryColor()+",0) )",

            //backgroundImage: "linear-gradient("+getPrimaryColorFinal()+ ", rgba("+getPrimaryColor()+",0.6),rgba("+getPrimaryColor()+",0.3), rgba("+getPrimaryColor()+",0.1), rgba("+getPrimaryColor()+",0) )",
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
                        <Nav.Link style={nav_bar} href="#home">SOBRE NÓS<hr style={line_class} /></Nav.Link>
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
