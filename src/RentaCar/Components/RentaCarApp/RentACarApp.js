import React, { Component } from 'react';
import './RentaCarApp.css';
import Home from "../Home/Home";
import Classes from "../Classes/Classes";
import Simulation from "../Simulation/Simulation";
import Footer from "../Footer/Footer";
import {Nav, Navbar} from "react-bootstrap";
import {getTextColor,getPrimaryColorFinal} from "../../../Colors";
import {getPadding} from "../../Utils";
import {getLanguage, getLanguageName, setLanguage, translate} from "../../../Languages/Language_Handler";
import Dropdown from "react-bootstrap/Dropdown";


class RentACarApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'home',
            height: 0,
            lang_name: getLanguageName()
        };
        this.homeRef = React.createRef();
        this.classesRef = React.createRef();
        this.simulationRef = React.createRef();
        this.handleSetLanguage = this.handleSetLanguage.bind(this)
    }

    handleSetLanguage = event => {
        let lang = event.target.innerHTML.toLowerCase();
        if (lang !== null && lang !== getLanguage()) {
            console.log(lang);
            setLanguage(lang);
            this.setState({lang_name: getLanguageName()});
        }
    };

    setSelected(new_name){
        this.setState({name: new_name})
    }

    isSelected(new_name){
        return this.state.name === new_name;
    }

    componentDidMount() {
        const height = document.getElementById('title').clientHeight;
        this.setState({ height: height });
    }

    render() {
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - (this.state.height / 2));

        const line_class={
            margin: "auto",
            marginTop: "6px",
            border: "1.2px solid " + getPrimaryColorFinal()
        };

        const nav_bar={
            fontVariant: "small-caps",
            color: getTextColor(),
            fontFamily: "Text_Bold",
            fontSize: "18px",
            letterSpacing: "1.5px",
            marginLeft:"6px",
            float:'right'
        };

        const nav_bar_voltar={
            fontVariant: "small-caps",
            color: getTextColor(),
            fontFamily: "Text_Bold",
            fontSize: "18px",
            letterSpacing: "1.5px",
            float:"left",
        };

        const divMenu_app = {
            backgroundImage: "linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.6),rgba(255,255,255,0) )",

            backgroundColor:'white',
            borderWidth:"0px",
            margin:"0",
            width:"100%",
            padding:"0",
            paddingBottom:"20px"

        };

        const menu_app = {
            width:'100%',
            paddingLeft:getPadding(),
            paddingRight:getPadding(),
            margin:"0",
            fontSize: "15px",
            marginTop: "20px",
            float:'right',
        };

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" sticky="top"  style={divMenu_app}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderWidth: "0px"}} />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav style={menu_app}>
                            <Nav.Link style={nav_bar_voltar} href="/"> {translate("nav.back")} </Nav.Link>
                            <Nav.Link style={nav_bar}>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        { getLanguageName() }
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={this.handleSetLanguage} value="pt">PT</Dropdown.Item>
                                        <Dropdown.Item onClick={this.handleSetLanguage} value="en">EN</Dropdown.Item>
                                        <Dropdown.Item onClick={this.handleSetLanguage} value="es">ES</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                            <Nav.Link style={nav_bar} onClick={() => {this.setSelected('simulation'); scrollToRef(this.simulationRef); }}> {translate("nav.simulation")} {this.isSelected('simulation') ? <hr style={line_class} /> : <div/>}</Nav.Link>
                            <Nav.Link style={nav_bar} onClick={() => {this.setSelected('classes'); scrollToRef(this.classesRef);}}> {translate("nav.fleet")} {this.isSelected('classes') ? <hr style={line_class} /> : <div/>}</Nav.Link>
                            <Nav.Link style={nav_bar} onClick={() => {this.setSelected('home'); scrollToRef(this.homeRef);}}> {translate("nav.aboutus")} {this.isSelected('home') ? <hr style={line_class} /> : <div/>} </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div ref={this.homeRef} id='home'>
                    <Home name="home"/>
                </div>
                <div ref={this.classesRef} id='classes'>
                    <Classes name="classes"/>
                </div>
                <div ref={this.simulationRef} id='simulation'>
                    <Simulation name="simulation"/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default RentACarApp;
