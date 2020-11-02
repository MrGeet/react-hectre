import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Graph from "./pages/Graphs/Graph";
import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Water from './pages/Water';
import Time from './pages/Time';
import Progress from './pages/Progress';
import Finance from './pages/Finance';
import Location from './pages/Water';
import List from './pages/List';
import './pages/Pages.css'
import Layout from './Container/Layout';

class App extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Router>
                        <Sidebar />

                        {/* <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/fruits" component={Fruits} />
                            <Route path="/water" component={Water} />
                            <Route path="/time" component={Time} />
                            <Route path="/progress" component={Progress} />
                            <Route path="/finance" component={Finance} />
                            <Route path="/location" component={Location} />
                            <Route path="/list" component={List} />
                            <Route path="/graph" component={Graph} />
                        </Switch> */}
                        <Layout/>
                    </Router>
                </React.Fragment>
            </div>
        );
    }
}

export default App;
