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
            paddingTop: "80px",
            paddingBottom: "120px",
            fontFamily: 'Text_Bold',
            fontSize: "18px",
            letterSpacing: "1px",
        };


        const leftDiv_Footer={
          width:'50%',
          float:'left',
          display:'inline-block',
        };
        const rightDiv_Footer={
            width:'50%',
            float:'right',
            display:'inline-block',
        };


        return (
            <div style={divMenu_footer}>
                {/*  <div style={menuRect_footer}/>*/}

                <div style={menu_footer}>
                    <div style={leftDiv_Footer}>
                        <div>Avenida do Centro Cívio nº5, <br/>4910-431 Vila Praia de Âncora</div>
                    </div>
                    <div style={rightDiv_Footer}>
                        <div>seguros@carlosparente.com  <br/>917 265 180 · 258 404 888</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
