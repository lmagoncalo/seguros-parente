import React, { Component } from 'react';
import {getPadding, getTitleSize,getMenuTop} from "../../Utils";
import Row from "react-bootstrap/Row";

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

        const segurosFont_home={
            fontFamily: 'Montserrat-Bold',
            fontSize:'58px',
        };


        return(
            <div style={menu_home}>
                <h1 style={title_home}> · <span style={segurosFont_home}>carlosparente</span><span style={italic_home}> —<br/>mediação de seguros</span></h1>
                <p style={text_home}>Página em desenvolvimento<br/><br/><br/><br/><br/></p>
            </div>
        );
    }
}

export default Home;
