import React, { Component } from 'react';
import './Classes.css';
import Title from "../Title/Title";
import {getClasses} from "../../Utils";
import Class from '../Class/Class'
import {ListGroup} from "react-bootstrap";

class Classes extends Component {
    render() {
        // Cria uma apresentação para cada classe
        const classes = getClasses();
        const classes_comp = classes.map((c) => {
            return (
                <ListGroup.Item> <Class className="col-lg" key={"Class " + c.id} class={c} /> </ListGroup.Item>
            );
        });

        return (

            <div>
                <Title name={"A nossa frota"}/>
                <ListGroup>
                    {classes_comp}
                </ListGroup>
            </div>
        );
    }
}

export default Classes;
