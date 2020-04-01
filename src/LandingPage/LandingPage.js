import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './LandingPage.css'
import {getPrimaryColorFinal} from "../Colors";

class LandingPage extends Component{
    render() {
        const left_class = {
            height: '49.5vh',
            backgroundColor: getPrimaryColorFinal(),
            color: 'white'
        };
        const right_class = {
            height: '49.5vh',
            backgroundColor: 'black',
            color: 'white'
        };
        const middle_class = {
            height: '1vh',
            backgroundColor: 'white'
        };

        return (
            <Container fluid>
                <Row style={left_class}>
                    <Link to="/rentacar">Rent-a-Car</Link>
                </Row>
                <Row style={middle_class}/>
                <Row style={right_class}>
                    <Link to="/seguros">Seguros</Link>
                </Row>
            </Container>
        );
    }
}

export default LandingPage;
