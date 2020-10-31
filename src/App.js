import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPanel from "./components/Content/MainPanel";

class App extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Router>
                        <Sidebar>

                        </Sidebar>
                        <MainPanel />

                    </Router>
                </React.Fragment>
            </div>
        );
    }
}

export default App;
