import React, { Component } from 'react';
import {Container, Row} from "react-bootstrap";
import {getPadding, getTitleSize,getMenuTop} from "../../Utils";

class Home extends Component {
    render() {
        const menu_home={
            width: '100%',
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            paddingTop: getMenuTop(),
            paddingBottom: getMenuTop(),
        }

        const title_home={
            fontFamily: 'Display_Medium',
            fontSize: getTitleSize(),
            marginBottom: '30px'
        }

        const italic_home={
            fontFamily: 'Display_Bold_Italic'
        }

        const text_home={
            fontFamily: 'Text_Medium'
        }

        return(
            <div style={menu_home}>
                    <h1 style={title_home}> · Vila Praia de Âncora <br/> já tem <span style={italic_home}>Rent a car!</span></h1>
                    <p style={text_home}>Somos o primeiro Rent a car de Vila Praia de Âncora. Temos cerca de dez veículos ao seu dispor com diferentes características e preços ao dia. Venha conhecer a nossa frota!</p>
            </div>
        );
    }
}

export default Home;
