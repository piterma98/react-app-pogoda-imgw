import React from 'react';
import './App.css';
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";

const Synoptic = () => (
    <div>
        <h2>Synoptic</h2>
    </div>
);

const Hydrological = () => (
    <div>
        <h2>Hydrological</h2>
    </div>
);

const Page404 = () => (
    <div>
        <h2>404</h2>
    </div>
);

function App() {
    const getData=()=> {
            fetch('https://danepubliczne.imgw.pl/api/data/synop')
                .then(response => response.json())
                .then(data => console.log(data));
    };
    getData();
    return (
        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Synoptic">Synoptic data</Link>
                    </li>
                    <li>
                        <Link to="/Hydrological">Hydrological data</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/synoptic"><Synoptic /></Route>
                <Route path="/Hydrological"><Hydrological /></Route>
                <Route path="*" > <Page404/> </Route>
            </Switch>
        </div>
    );
}

export default App;
