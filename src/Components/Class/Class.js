import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import car from './car.jpg'
import {getPadding, getSubMenuTop} from "../../Utils";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { class: props.class };
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
            marginBottom: getSubMenuTop()
        };

        const info_class={
            listStyle:'none',
            paddingLeft:0,
            marginTop:0,
            paddingBottom:0,
            margin:'0'
        };


        const info_text_class={
                display:"inline-block",
                marginRight:"10x"
            };

        const li_info_class={


        };


        const icon_class={
            width:"20px",
            display:"inline-block",
            marginRight:"10px"
        };

        const image_class={
            width:"200px"
        };

        const line_class={
            margin: "auto 10px",
            border: "1.5px solid rgb(150, 150, 150)"
        };

        return (
            <div style={menu_class}>
                    <h3 style={title_class}>{this.state.class.name}</h3>
                    <hr style={line_class} />
                     <ul style={info_class}>
                         <li style={li_info_class}>
                            <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.seats} lugares</p>
                         </li>
                         <li style={li_info_class}>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.space} malas</p>
                         </li>
                         <li style={li_info_class}>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.air_conditioning}</p>
                         </li>
                         <li style={li_info_class}>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.gear}</p>
                         </li>
                         <li style={li_info_class}>
                             <Image style={icon_class} src={car} />
                             <p style={info_text_class}>{this.state.class.doors} portas</p>
                         </li>
                         <li style={li_info_class}>
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
