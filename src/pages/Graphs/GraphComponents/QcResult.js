import React from "react";
import styled from "styled-components";
import "./BoxStyle.css";
import { Line } from "react-chartjs-2";

const Styles = styled.div`
    display: inline-block;
`;

const Chart = styled.div`
    width: 35%;
    min-height: 30%;
    /* display: flex; */
    position: relative;
    top: 15%;
    margin: 20px;
    /* overflow: auto; */
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 300;
    padding: 30px;
    width: 100%;
`;

export const QcResult = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Sales for 2020 (M)",
                data: [91, 95, 93],
                borderColor: ["#E5462C"],
                backgroundColor: ["rgba(229,70,44,0.2"],
                pointBackgroundColor: "#E5462C",
                pointBorderColor: "#E5462C",
            },
            {
                label: "Sales for 2019 (M)",
                data: [, , 95, 96],
                borderColor: ["#DD982B"],
                backgroundColor: ["rgba(221,152,43,0.2"],
                pointBackgroundColor: "#DD982B",
                pointBorderColor: "#DD982B",
            },
            {
                label: "Sales for 2018 (M)",
                data: [, , , 92, 95],
                borderColor: ["rgba(72,186,115"],
                backgroundColor: ["rgba(72,186,115,0.2"],
                pointBackgroundColor: "rgba(72,186,115",
                pointBorderColor: "rgba(72,186,115",
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 80,
                        max: 100,
                        stepSize: 5,
                    },
                },
            ],
        },

        legend: {
            position: "top",
            align: "end",
        },
    };

    return (
        <div className="box-style">
            <div className="flex-container">
                <Title>
                    QC RESULTS
                    <Chart>
                        <Line data={data} options={options} />
                    </Chart>
                </Title>
                <div>Picker Damage</div>
                <div>Comestic</div>
                <div>Pest</div>
            </div>
        </div>
    );
};
