import React, { Component } from 'react';
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
            marginTop: '30px',
            marginBottom: '50px'
        };

        const italic_home={
            fontFamily: 'Display_Bold_Italic'
        };

        const text_home={
            fontFamily: 'Text_Regular',
            fontSize: '27px',
            lineHeight: '32px'
        };



        return(
            <div style={menu_home}>
                    <h1 style={title_home}> · Vila Praia de Âncora <br/> já tem <span style={italic_home}>Rent a car!</span></h1>
                <p style={text_home}>Somos o primeiro <span style={italic_home}>Rent a car</span> de Vila Praia de Âncora. Temos cerca de dez veículos ao seu dispor com diferentes características e preços ao dia. Venha conhecer a nossa frota!</p>
            </div>
        );
    }
}

export default Home;
