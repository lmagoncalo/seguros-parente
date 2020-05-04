import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SegurosApp from "../Seguros/Components/SegurosApp/SegurosApp";
import LandingPage from "../LandingPage/LandingPage";
import RentACarApp from "../RentaCar/Components/RentaCarApp/RentACarApp";

export default function App() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/rentacar">
                    <RentACarApp />
                </Route>
                <Route path="/seguros">
                    <SegurosApp />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    );
}
