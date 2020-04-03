import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import {getIcons, getPadding, getSubMenuTop} from "../../Utils";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { class: props.class, title_orientation: props.title_orientation, info_orientation: props.info_orientation, color: props.color};
    }

    render() {
        const total_class={
            padding:'0',
            margin:'0',
        };

         const menu_rect={
             background: "black",
             height:"3px",
             width:"100%",
             padding:"0",
             margin:"0",
             position: "absolute",
             //backgroundImage: "linear-gradient("+getPrimaryColorFinal()+ ", rgba("+getPrimaryColor()+",0.6),rgba("+getPrimaryColor()+",0.3), rgba("+getPrimaryColor()+",0.1), rgba("+getPrimaryColor()+",0) )",
         };

        const menu_class={
            paddingLeft:getPadding(),
            paddingRight:getPadding()
        };

        const divSubTitle_class={
            width:"100%",
            height:"auto",
            display:"inline-block",
        };

        const subTitle_class={
            fontFamily:'Text_Bold',
            fontVariant: "small-caps",
            fontSize: "35px",
            letterSpacing: "2px",
            marginTop: getSubMenuTop(),
            marginBottom: getSubMenuTop(),
            float:this.state.title_orientation
        };

        const line_class={
            margin: "auto",
            marginTop: "8px",
            border: "1.5px solid " + this.state.color
        };

        const info_class={
            listStyle:'none',
            paddingLeft:0,
            marginTop:0,
            paddingBottom:0,
            margin:'0',
            position: "relative",
            float: "left",
            width:"40%",
        };

        const info_text_class={
            display:"inline-block",
            marginRight:"10x",
            marginBottom: 0,
            fontSize: "23px",
            fontFamily: "Text_Regular"
        };

        const icon_class={
            width:"22px",
            display:"inline-block",
            marginRight:"10px",
           // backgroundColor:"rgba(255,0,0,1)",
            paddingTop:"0",
            paddingBottom: "10px"
        };

        const image_class={
            width:"100%",
        };

        const divImage_class={
           // float:this.state.title_orientation
            float:"right",
            width:"60%",
            marginBottom:getSubMenuTop(),
            //backgroundColor:"rgba(255,0,0,0.5)"
        };

        let icons = getIcons(this.state.color);

        return (
            <div style={total_class}>
                {/* <div style={menu_rect}/>*/}
                <div style={menu_class}>

                    <div style={divSubTitle_class}>
                        <h3 style={subTitle_class}>{this.state.class.name}
                            <hr style={line_class} />
                        </h3>

                    </div>
                     <ul style={info_class}>
                         <li>
                            <Image style={icon_class} src={icons[0]} />
                             <p style={info_text_class}>{this.state.class.seats} lugares</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={icons[1]} />
                             <p style={info_text_class}>{this.state.class.space} malas</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={icons[2]} />
                             <p style={info_text_class}>{this.state.class.air_conditioning}</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={icons[3]} />
                             <p style={info_text_class}>{this.state.class.gear}</p>
                         </li>
                         <li>
                             <Image style={icon_class}src={icons[4]} />
                             <p style={info_text_class}>{this.state.class.doors} portas</p>
                         </li>
                         <li>
                             <Image style={icon_class} src={icons[5]} />
                             <p style={info_text_class}>{this.state.class.fuel}</p>
                         </li>
                     </ul>
                <div style={divImage_class}>
                    <Image style={image_class} src={this.state.class.src} />
                </div>
            </div>
            </div>
        );
    }
}

export default Class;
