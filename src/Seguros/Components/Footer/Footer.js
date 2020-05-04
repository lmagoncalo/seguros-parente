import React, { Component } from 'react';
import {getPadding} from "../../Utils";
import {Image} from "react-bootstrap";
import logo from '../../logo.png';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="divMenu_footer">
                <div className="menu_footer">
                    <div className="parts_footer">
                        <div className="text_footer" >avenida do centro cívico nº5, <br/>4910-431 vila praia de âncora</div>
                    </div>
                    <div className="partsImage_footer">
                        <Image className="img_footer" src={logo} />
                    </div>
                    <div className="parts_footer">
                        <div className="text_footer" >seguros@carlosparente.com  <br/>917 265 180 · 258 404 888</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
