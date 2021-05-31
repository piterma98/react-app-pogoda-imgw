import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes from "./routes";

import NavigationBar from "./components/Shared/NavigationBar";
import Page404 from "./components/Page404";

const App: React.FC = () => {
    return (
        <div className = 'App'>
            <NavigationBar />
            <Switch>
                {Routes.map((route: any) => (
                    <Route exact path={route.path} key={route.path}>
                        <route.component />
                    </Route>
                ))}
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}

export default App;
