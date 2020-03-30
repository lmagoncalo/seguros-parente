import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import {getPadding, getTitleSize} from "../../Utils";

class Title extends Component{

    render() {
        const retWhite_title={
            background: "white",
            height:"8px",
            width:"100%"
        };

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
            <div>
                <div style={retWhite_title} />
                <div style={menu_title}>
                    <Col style={title_title}>· {this.props.name} ·</Col>
                </div>
            </div>
        );
    }
}

export default Title;
