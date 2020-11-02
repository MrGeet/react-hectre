import React from "react";
import styled from "styled-components";
import "./BoxStyle.css";
import { Line } from "react-chartjs-2";

const Selection = styled.div`
    margin: 0px 20px;
    /* display: inline-block; */
`;

const Dropbox = styled.div`
    margin: 0px 20px;
    right: 20px;
    position: absolute;
    /* display: inline-block; */
    display: flex;
`;

const Chart = styled.div`
    margin: 2% 50px 0px;
    width: 70%;
    min-height: 70%;
    top: 25%;
    /* overflow: auto; */
    /* max-height: 70%; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    position: absolute;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 300;
    padding: 30px 30px 5px;
    width: 100%;
`;

export const Trend = () => {
    const data = {
        labels: [1, 2, 4, 5, 6, 7, 8, 9],
        // xAxisID: "Jan",
        datasets: [
            {
                label: "Gala",
                data: [
                    37000,
                    35000,
                    40000,
                    45000,
                    34000,
                    47000,
                    57000,
                    43300,
                    59000,
                    17000,
                ],
                lineTension: 0,
                borderColor: ["#38C976"],
                backgroundColor: "transparent",
                pointBackgroundColor: "#38C976",
                pointBorderColor: "#38C976",
            },
            {
                label: "Envy",
                data: [
                    46618,
                    49759,
                    57827,
                    51044,
                    66865,
                    53484,
                    52072,
                    43300,
                    59000,
                    17000,
                ],
                lineTension: 0,
                borderColor: ["#FC7D58"],
                backgroundColor: "transparent",
                pointBackgroundColor: "#FC7D58",
                pointBorderColor: "#FC7D58",
            },
            {
                label: "Royal",
                data: [
                    48305,
                    68739,
                    63680,
                    69712,
                    49532,
                    47000,
                    38786,
                    37317,
                    59000,
                    17000,
                ],
                lineTension: 0,
                borderColor: ["#FDCC36"],
                backgroundColor: "transparent",
                pointBackgroundColor: "#FDCC36",
                pointBorderColor: "#FDCC36",
            },
        ],
    };

    const options = {
        legend: {
            position: "top",
            align: "start",
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            
            xAxes: [
                {
                    ticks: {
                        max: 2,
                    },
                    type: "category",
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ],
                },
            ],
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100000,
                        stepSize: 20000,
                    },
                },
            ],
        },
    };

    return (
        <div className="half box-style">
            <Title>TREND</Title>
            <div className="flex-container">
                <Selection>Production</Selection>
                <Selection>Cost</Selection>
                <Dropbox>
                    <div>Varieties</div>
                    <div>Orchards</div>
                </Dropbox>
            </div>
            <div className="flex-container">
                <Chart>
                    <Line data={data} options={options} />
                </Chart>
            </div>
        </div>
    );
};
