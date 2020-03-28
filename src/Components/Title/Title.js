import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {getColor} from "../../Colors";
import {getPadding, getTitleSize} from "../../Utils";

class Title extends Component{

    render() {
        const menu_title = {
            background: "black",
            color: "white",
            fontFamily: 'Display_Medium',
            fontSize: getTitleSize(),
            paddingTop: '35px',
            paddingBottom: '35px',
        };
        const title_title={
            paddingLeft: getPadding(),
            paddingRight: getPadding(),
            width: '100%'
        };

        return (
            <div style={menu_title} fluid >
                <div>
                    <Col style={title_title}>· {this.props.name} ·</Col>
                </div>
            </div>
        );
    }
}

export default Title;
