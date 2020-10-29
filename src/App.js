import React, { Component } from "react";
import "./App.css";
import { NavigationBar } from "./containers/Navigation/NavigationBar";
import { Sidebar1 } from "./containers/Navigation/Sidebar1";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SummaryBox from "./components/SummaryBox";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Sidebar1></Sidebar1>
                    <NavigationBar />
                    {/* <SummaryBox/> */}
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
