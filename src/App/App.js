import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SegurosApp from "../Seguros/Components/SegurosApp/SegurosApp";
import LandingPage from "../LandingPage/LandingPage";
import RentaCarApp from "../RentaCar/Components/RentaCarApp/RentaCarApp";

export default function App() {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/rentacar">
                    <RentaCarApp />
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
