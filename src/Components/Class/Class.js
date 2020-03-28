import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import car from './car.jpg'
import {getPadding, getSubMenuTop} from "../../Utils";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { class: props.class, orientation: props.orientation, color: props.color };
    }

    render() {
        const menu_class={
            paddingLeft:getPadding(),
            paddingRight:getPadding()
        };

        const title_class={
            fontFamily:'Text_Bold',
            fontVariant: "small-caps",
            fontSize: "34px",
            letterSpacing: "2px",
            marginTop: getSubMenuTop(),
            marginBottom: getSubMenuTop(),
            float:this.state.orientation
        };

        const line_class={
            margin: "auto",
            marginTop: "8px",
            //float: "left",
            border: "1.2px solid " + this.state.color
        };

        const info_class={
            listStyle:'none',
            paddingLeft:0,
            marginTop:0,
            paddingBottom:0,
            margin:'0',
            textAlign: this.state.orientation,
            position: "relative"
        };

        const info_text_class={
            display:"inline-block",
            marginRight:"10x",
            marginBottom: 0,
            fontSize: "25px",
            fontFamily: "Text_Regular"
        };

        const icon_class={
            width:"20px",
            display:"inline-block",
            marginRight:"10px"
        };

        const image_class={
            width:"200px"
        };


        return (
            <div style={menu_class}>
                    <div>
                        <h3 style={title_class}>{this.state.class.name}
                            <hr style={line_class} />
                        </h3>
                    </div>


                     <ul style={info_class}>
                         <li>
                            <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.seats} lugares</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.space} malas</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.air_conditioning}</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.gear}</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.doors} portas</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.fuel}</p>
                         </li>
                     </ul>
                    <Image style={image_class} src={car} />
                    <Image style={image_class} src={car} />
            </div>
        );
    }
}

export default Class;
