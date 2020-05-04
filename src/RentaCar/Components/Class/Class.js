import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import {getIcons, getPadding, getSubMenuTop} from "../../Utils";
import {translate} from "../../../Languages/Language_Handler";
import './Class.css';


class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { class: props.class, title_orientation: props.title_orientation, info_orientation: props.info_orientation, color: props.color};
    }

    render() {

        const subTitle_class={float:this.state.title_orientation};
        const line_class={border: "1.5px solid " + this.state.color};
        let icons = getIcons(this.state.color);

        console.log("classes." + this.state.class.name);

        return (
            <div className="total_class">
                <div className="menu_class">

                    <div className="divSubTitle_class">
                        <h3 className="subTitle_class" style={subTitle_class}> {translate("simulation." + this.state.class.name)}
                            <hr className="line_class" style={line_class} />
                        </h3>

                    </div>
                     <ul className="info_class">
                         <li>
                            <Image className="icon_class" src={icons[0]} />
                             <p className="info_text_class"> {this.state.class.seats} {translate("class.seats")} </p>
                         </li>
                         <li>
                             <Image className="icon_class" src={icons[1]} />
                             <p className="info_text_class"> {this.state.class.space} {translate("class.suitcases")} </p>
                         </li>
                         <li>
                             <Image className="icon_class" src={icons[2]} />
                             <p className="info_text_class"> {translate("class." + this.state.class.air_conditioning)} </p>
                         </li>
                         <li>
                             <Image className="icon_class" src={icons[3]} />
                             <p className="info_text_class"> {translate("class." + this.state.class.gear)} </p>
                         </li>
                         <li>
                             <Image className="icon_class" src={icons[4]} />
                             <p className="info_text_class"> {this.state.class.doors} {translate("class.doors")} </p>
                         </li>
                         <li>
                             <Image className="icon_class" src={icons[5]} />
                             <p className="info_text_class"> {translate("class." + this.state.class.fuel)} </p>
                         </li>
                     </ul>
                <div className="divImage_class">
                    <Image className="image_class" src={this.state.class.src} />
                </div>
            </div>
            </div>
        );
    }
}

export default Class;
