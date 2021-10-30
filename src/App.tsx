import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import {create, details, edit, home} from "./utils/constants";
import Edit from "./components/edit/Edit";



const App = () => {
    return (
        <Switch>
            <Route exact path={['/', `${home}`]}>
                <Home/>
            </Route>
            <Route path={details}>
                <Details/>
            </Route>
            <Route path={create}>
                <Create/>
            </Route>
            <Route path={edit}>
                <Edit/>
            </Route>
        </Switch>
    );
};

export default App;