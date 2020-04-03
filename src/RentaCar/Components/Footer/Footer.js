import React, { Component } from 'react';
import {getPrimaryColorFinal} from "../../../Colors";
import {getMenuTop, getPadding, getSubMenuTop} from "../../Utils";

class Footer extends Component {
    render() {

        const divMenu_footer = {
            width:"100%",
            background: getPrimaryColorFinal(),
        };

        const menuRect_footer={
                background: "black",
                height:"3px",
                width:"100%",
                padding:"0",
                margin:"0",
                position: "absolute",
        };

        const menu_footer={
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            textAlign: 'center',
            color:'white',
            paddingTop: "100px",
            paddingBottom: "100px",
            fontFamily: 'Text_Bold',
            fontVariant: "small-caps",
            letterSpacing: "1px",

        };

        const mail = {
            fontSize: "23px",
            marginBottom: "8px"
        };
        const contactos = {
            fontSize: "18px",
        };



        return (
            <div style={divMenu_footer}>
                {/*  <div style={menuRect_footer}/>*/}

                <div style={menu_footer}>
                    <div style={mail}>seguros@carlosparente.com</div>
                    <div style={contactos}>917 265 180 · 258 404 888</div>
                </div>
            </div>
        );
    }
}

export default Footer;
