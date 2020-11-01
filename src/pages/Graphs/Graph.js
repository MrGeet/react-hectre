import React, { Component } from "react";
import styled from "styled-components";
import { Percentage } from "./GraphComponents/Percentage";
import SummaryBox from "./GraphComponents/SummaryBox";
import { NavigationBar } from "../../components/Navigation/NavigationBar";
import { QcResult } from "./GraphComponents/QcResult";
import { SizeDistribution } from "./GraphComponents/SizeDistribution";
import { Trend } from "./GraphComponents/Trend";
// import {QcResult} from './QcResult';
// import SummaryBox from './../components/SummaryBox';

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

// const MainStyle = styled.div`
//     /* position: absolute; */
//     /* left: 0px; */
//     /* width: 100%; */
// `;

class Graph extends Component {
    render() {
        return (
            <>
           
                    <SummaryBox></SummaryBox>
                    <div className="flex-container">
                        <Percentage></Percentage>
                        <Trend></Trend>
                    </div>
                    <SizeDistribution></SizeDistribution>
                    <QcResult></QcResult>
                    
            </>
        );
    }
}

export default Graph;
