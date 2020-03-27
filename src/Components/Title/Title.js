import React, { Component } from 'react';
import './Title.css';
import {Container, Row, Col} from "react-bootstrap";

class Title extends Component{

    render() {
        return (
            <Container style={{backgroundColor: "black", color: "white"}} fluid >
                <Row>
                    <Col>· {this.props.name} ·</Col>
                </Row>
            </Container>
        );
    }
}

export default Title;
