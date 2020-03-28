import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import car from './car.jpg'

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { class: props.class };
    }

    render() {
        return (
            <div>
                    <h3>{this.state.class.name}</h3>
                    <Image src={car} rounded />
                    <Image src={car} rounded />
            </div>
        );
    }
}

export default Class;
