import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import {getPadding, getTitleSize} from "../../Utils";

class Title extends Component{

    render() {
        const menu_title = {
            background: "black",
            color: "white",
            fontFamily: 'Display_Medium',
            fontSize: getTitleSize(),
            paddingTop: '18px',
            paddingBottom: '18px',
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
