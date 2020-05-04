import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import {getPadding, getTitleSize} from "../../Utils";
import './Title.css';

class Title extends Component{

    render() {

        return (
            <div >
                <div className="retWhite_title" />
                <div id="title" className="menu_title">
                    <Col className="title_title">· {this.props.name} ·</Col>
                </div>
            </div>
        );
    }
}

export default Title;
