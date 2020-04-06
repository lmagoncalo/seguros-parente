import React, { Component } from 'react';
import {getPadding} from "../../Utils";
import {Image} from "react-bootstrap";
import logo from '../../logo.png';

class Footer extends Component {
    render() {

        const divMenu_footer = {
            width:"100%",
            background: 'black',
        };

        const menu_footer={
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            textAlign: 'center',
            color:'white',
            paddingTop: "50px",
            paddingBottom: "50px",
            fontFamily: 'Text_Bold',
            letterSpacing: "1px",
            fontVariant: 'small-caps',
            fontSize: "15px",
        };

        const parts_footer={
            width:'35%',
            display:'inline-block',
            verticalAlign: 'top',
        };

        const partsImage_footer={
            width:'30%',
            display:'inline-block',
            verticalAlign: 'top',
        };

        const text_footer={
            paddingTop:'10px',
            // background:'red',
        };

        const img_footer={
            width:'50%',
            textAlign: 'center',
            //  background:'blue',
        };


        return (
            <div style={divMenu_footer}>
                <div style={menu_footer}>
                    <div style={parts_footer}>
                        <div style={text_footer} >avenida do centro cívio nº<span style={{fontSize:'11px'}}>5, <br/>4910-431</span> vila praia de âncora</div>
                    </div>
                    <div style={partsImage_footer}>
                        <Image style={img_footer} src={logo} />
                    </div>
                    <div style={parts_footer}>
                        <div style={text_footer} >seguros@carlosparente.com  <br/>917 265 180 · 258 404 888</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
