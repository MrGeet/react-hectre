import React from "react";
import styled from "styled-components";
import "./BoxStyle.css";
import { Pie } from "react-chartjs-2";

const Styles = styled.div`
    width: 50%;
    display: inline-block;
`;
const Chart = styled.div`
    margin: 30px;
    width: 45%;
    min-height: 50%;
    display: flex;
    position: absolute;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 300;
    padding: 30px;
    width: 100%;
`;

export const Percentage = () => {
    const data1 = {
        labels: ["Gala", "Envy", "Royal"],
        datasets: [
            {
                label: "Production",
                data: [41, 27, 32],
                // borderColor: ["#E5462C"],
                backgroundColor: ["#38C976", "#FC7D58", "#FDCC36"],
            },
        ],
    };
    const data2 = {
        labels: ["Gala", "Envy", "Royal"],
        datasets: [
            {
                label: "Cost",
                data: [59, 30, 11],
                // borderColor: ["#E5462C"],
                backgroundColor: ["#38C976", "#FC7D58", "#FDCC36"],
            },
        ],
    };

    const options1={
        maintainAspectRatio: false,

        legend:{
            display:false,
        }
    }

    const options2 ={
        maintainAspectRatio: false,

        legend:{
            position: 'right',
            align: 'center',

            labels:{
                // shape: 'circle',
            }
        }
    }

    return (
        <div className="half box-style">
            <Title>PERCENTAGE</Title>
            <Chart>
                <Pie data={data1} options={options1}></Pie>
                <Pie data={data2} options={options2}></Pie>
            </Chart>
        </div>
    );
};
