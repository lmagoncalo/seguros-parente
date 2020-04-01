import React, { Component } from 'react';
import {Link} from "react-router-dom";

class LandingPage extends Component{
    render() {

        return (
            <div>
                Landing Page
                <br/>
                <Link to="/rentacar">Rent-a-Car</Link>
                <br/>
                <Link to="/seguros">Seguros</Link>
            </div>
        );
    }
}

export default LandingPage;
