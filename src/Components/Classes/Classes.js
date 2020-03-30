import React, { Component } from 'react';
import Title from "../Title/Title";
import {getClasses} from "../../Utils";
import Class from '../Class/Class'
import {ListGroup} from "react-bootstrap";
import {getPrimaryColorFinal} from "../../Colors";


class Classes extends Component {
    render() {
        // Cria uma apresentação para cada classe
        let background_color;
        let color;
        let title_orientation;
        let info_orientation;
        let icon_paste;
        let flag = true;
        const classes = getClasses();

        const classes_comp = classes.map((c) => {
            if(flag){
                background_color = getPrimaryColorFinal();
                color = 'white';
                title_orientation = 'right';
                info_orientation='left';
                icon_paste="white"
            } else{
                background_color = 'white';
                color = 'black';
                title_orientation = 'left';
                info_orientation='right';
                icon_paste="black"
            }
            flag = !flag;

            return (
                <ListGroup.Item style={{backgroundColor:background_color, color:color}} key={"class_list_" + c.id}> <Class title_orientation={title_orientation} info_orientation={info_orientation} color={color} icon_paste={icon_paste} className="col-lg" key={"class_" + c.id} class={c} /> </ListGroup.Item>
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
