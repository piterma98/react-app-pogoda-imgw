import React from 'react';
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Page404 from "./components/Page404";
import Synoptic from "./components/Synoptic";
import Hydrological from "./components/Hydro";
import { Route, Switch } from "react-router-dom";



function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/synoptic" component={Synoptic} />
                <Route path="/hydrological" component={Hydrological} />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}

export default App;
