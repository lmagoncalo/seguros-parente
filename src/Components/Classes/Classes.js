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
        let background_color;
        let color;
        let flag = true;
        const classes = getClasses();

        const classes_comp = classes.map((c) => {
            if(flag){
                background_color = getColor();
                color = 'white';
            } else{
                background_color = 'white';
                color = 'black';
            }
            flag = !flag;

            return (
                <ListGroup.Item style={{backgroundColor:background_color, color:color}} key={"class_list_" + c.id}> <Class className="col-lg" key={"class_" + c.id} class={c} /> </ListGroup.Item>
            );
        });

        return (
            <div>
                <Title name={"A nossa frota"}/>
                <ListGroup variant="flush">
                    {classes_comp}
                </ListGroup>
            </div>
        );
    }
}

export default Classes;
