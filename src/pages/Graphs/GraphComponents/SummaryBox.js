import React, { Component } from "react";
// import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import styled from "styled-components";
import "./BoxStyle.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";



const Style = styled.div`
    position: relative;
    height: 300px;
    justify-content: center;
    background-color: white;
    display: flex;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #ccc;
    margin: 10px;
    /* margin-right: 100px; */
    /* margin-bottom: 10px; */
`;

const StyleBtn = styled.div`
    /* right: 10px;
    position: fixed;
    display: flex;
    font-size: 20px;
    padding-left: 10px;
    justify-content: space-around;
    color: #828282; */
    /* margin: 10px; */
`;

const BoxReport = styled.div`
    position: relative;
    height: 60%;
    /* margin-top: 100px; */
    overflow: auto;
    margin: 50px 10px 0px;
    border-top: 5px solid #C65F4F; 
    background-color: #f9f9f9;
    display: flex;
    color: #828282;
    font-size: 17px;
    padding: 20px 20px 0px;
    justify-content: space-between;
`;

class SummaryBox extends Component {
    render() {
        return (
            <div className="box-style">
                <div>Summary</div>

                <div className="flex-container">
                    <div>Date Range</div>
                    <div>Orchard</div>

                    <StyleBtn>
                        <BsIcons.BsDownload className='btn print' onClick={()=>console.log("download")}></BsIcons.BsDownload>
                        <BiIcons.BiPrinter className='btn download' onClick={()=>console.log("print")}></BiIcons.BiPrinter>
                    </StyleBtn>
                </div>

                <BoxReport>
                    <div>Total <br/> Bins</div>
                    <div>Total <br/> Varieties</div>
                    <div>Total <br/> Staff</div>
                    <div>Total <br/> Working Hours</div>
                    <div>Average <br/> Rate</div>
                    <div>Total <br/> Labor Cost</div>
                </BoxReport>
            </div>
        );
    }
}

export default SummaryBox;
//             <DateRangePicker
//   startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//   startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//   endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//   endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
//   focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//   onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
// />
