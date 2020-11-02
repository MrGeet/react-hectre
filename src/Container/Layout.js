import React from "react";
import styled from 'styled-components';
import Graph from "../pages/Graphs/Graph";
import Home from '../pages/Home';
import Fruits from '../pages/Fruits';
import Water from '../pages/Water';
import Time from '../pages/Time';
import Progress from '../pages/Progress';
import Finance from '../pages/Finance';
import Location from '../pages/Water';
import List from '../pages/List';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NavigationBar} from '../components/Navigation/NavigationBar'

const StyleMain = styled.div`
    position: fixed;
    overflow: auto;
    /* display: block; */
    height: 100%;
    width: 100%;
    background-color: #efefef;
    z-index: -5;
`;

const Side = styled.div`
    margin-left: 65px;
    /* position: relative; */
`;

const Layout = () => {
    return (
        <StyleMain>
            <Side>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/fruits" component={Fruits} />
                    <Route path="/water" component={Water} />
                    <Route path="/time" component={Time} />
                    <Route path="/progress" component={Progress} />
                    <Route path="/finance" component={Finance} />
                    <Route path="/location" component={Location} />
                    <Route path="/list" component={List} />
                    <Route path="/graph" component={Graph} />
                </Switch>
            </Side>
        </StyleMain>
    );
};

export default Layout;
