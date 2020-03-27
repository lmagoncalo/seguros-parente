import React, { Component } from 'react';
import './Home.css';
import {Container, Row} from "react-bootstrap";

class Home extends Component {
    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <h1>· Vila Praia de Âncora <br/> já tem <i>Rent a car!</i></h1>
                </Row>
                <Row>
                    <p>Somos o primeiro Rent a car de Vila Praia de Âncora. Temos cerca de dez veículos ao seu dispor com diferentes características e preços ao dia. Venha conhecer a nossa frota!</p>
                </Row>
            </Container>
        );
    }
}

export default Home;
