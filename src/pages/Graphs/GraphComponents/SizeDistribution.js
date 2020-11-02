import React from "react";
import styled from "styled-components";
import "./BoxStyle.css";
import { Bar } from "react-chartjs-2";

const Styles = styled.div`
    width: 50%;
    display: inline-block;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 300;
    padding: 30px;
    width: 100%;
`;

const TempStyle = styled.div`
    padding: 30px 20px;
    /* width: 100%; */
    position: relative;
    right: 40%;
`;

const Chart = styled.div`
    width: 70%;
    min-height: 70%;
    /* height: 30%; */
    display: flex;
    /* position: absolute; */
    /* justify-content: center; */
    /* align-items: center; */
    /* top: 10%; */
    margin: auto;
    /* overflow: auto; */
`;

export const SizeDistribution = () => {
    const data = {
        labels: [34, 48, 56, 88, 102, 113, 125, 135, 150, 163],
        datasets: [
            {
                label: "Total Apples",
                data: [2, 22, 34, 123, 450, 700, 423, 340, 230, 123],
                borderColor: ["#E5462C"],
                backgroundColor: ["rgba(229,70,44,0.2"],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true
    };

    return (
        <div className="box-style">
            <div className="flex-container">
                <Title>SIZE DISTRIBUTION</Title>
                <TempStyle>(Varieties)</TempStyle>
                <TempStyle>(Orchards)</TempStyle>
            </div>
                <Chart>
                    <Bar data={data} options={options}></Bar>
                </Chart>
        </div>
    );
};
