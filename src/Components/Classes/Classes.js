import React, { Component } from 'react';
import './Classes.css';
import Title from "../Title/Title";
import {getClasses} from "../../Utils";
import Class from '../Class/Class'
import {ListGroup} from "react-bootstrap";
import {getColor} from "../../Colors";

class Classes extends Component {
    render() {
        // Cria uma apresentação para cada classe
        const classes = getClasses();
        let background_color;
        let color;
        let flag = true;
        const classes_comp = classes.map((c) => {
            if(flag){
                background_color = getColor();
                color = 'white';
                flag = false;
            } else{
                background_color = 'white';
                color = 'black';
                flag = true;
            }
            return (
                <ListGroup.Item style={{backgroundColor:background_color, color:color}}> <Class className="col-lg" key={"class_" + c.id} class={c} /> </ListGroup.Item>
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
