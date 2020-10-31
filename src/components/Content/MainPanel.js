import React, { Component } from "react";
import styled from "styled-components";
import { Percentage } from "./Percentage";
import SummaryBox from "./SummaryBox";
import { NavigationBar } from "../../containers/Navigation/NavigationBar";
import { QcResult } from "./QcResult";
import { SizeDistribution } from "./SizeDistribution";
import { Trend } from "./Trend";
// import {QcResult} from './QcResult';
// import SummaryBox from './../components/SummaryBox';

const StyleMain = styled.div`
    position: fixed;
    overflow: auto;
    /* display: block; */
    height: 100%;
    width: 100%;
    background-color: #efefef;
    /* min-height: 100vh; */
    /* margin-left: 64px; */

    z-index: -5;
`;

const Side = styled.div`
    margin-left: 80px;
    /* position: relative; */
`;

// const MainStyle = styled.div`
//     /* position: absolute; */
//     /* left: 0px; */
//     /* width: 100%; */
// `;

class MainPanel extends Component {
    render() {
        return (
            <StyleMain>
                <Side>
                    <NavigationBar></NavigationBar>
                    <SummaryBox></SummaryBox>
                    <div className="flex-container">
                        <Percentage></Percentage>
                        <Trend></Trend>
                    </div>
                    <SizeDistribution></SizeDistribution>
                    <QcResult></QcResult>
                </Side>
            </StyleMain>
        );
    }
}

export default MainPanel;
