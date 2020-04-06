import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './LandingPage.css'
import {getPrimaryColorFinal} from "../Colors";
import {getMenuTop, getPadding} from "../RentaCar/Utils";

class LandingPage extends Component{
    render() {
        const left_class = {
            height: '49.5vh',
            backgroundColor: getPrimaryColorFinal(),
            color: 'white',
            paddingTop: getMenuTop(),
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            textDecoration: "none",
        };
        const right_class = {
            height: '49.5vh',
            backgroundColor: 'black',
            color: 'white',
            paddingTop: getMenuTop(),
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            textDecoration: "none",
        };
        const middle_class = {
            height: '1vh',
            backgroundColor: 'white'
        };

        const title_land={
            fontFamily: 'Display_Medium',
            fontSize: '60px',
            marginTop: '20px',
            marginBottom:'0',
            paddingBottom:'0',
        };

        const italic_land={
            fontFamily: 'Display_Bold_Italic',
        };

        const segurosFont_land={
            fontFamily: 'Montserrat-Bold',
            fontSize:'58px',
        };
        const text_land={
            fontFamily: 'Text_Regular',
            fontSize: '24px',
            lineHeight: '32px'
        };


        return (
            <Container fluid>
                <Link to="/rentacar">
                    <Row style={left_class}>
                        <h1 style={title_land}> · Vila Praia de Âncora <br/> já tem <span style={italic_land}>Rent a car!</span></h1>
                        <p style={text_land}>Aluguer de carros desde 4€/dia!</p>
                    </Row>
                </Link>
                <Row style={middle_class}/>
                <Link to="/seguros">
                    <Row style={right_class}>

                        <h1 style={title_land}> · <span style={segurosFont_land}>carlosparente</span><span style={italic_land}> —<br/>mediação de seguros</span></h1>
                        <p style={text_land}>Venha conhecer os nossos serviços!</p>
                    </Row>
                </Link>
            </Container>
        );
    }
}

export default LandingPage;
