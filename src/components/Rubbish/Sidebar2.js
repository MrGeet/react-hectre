// import React from 'react';
// import SideNav, {
//     NavItem,
//     NavIcon,
//     NavText,
// } from "@trendmicro/react-sidenav";


// // Be sure to include styles at some point, probably during your bootstraping
// import styled from "styled-components";
// import "@trendmicro/react-sidenav/dist/react-sidenav.css";

// const Styles = styled.div`
//     background-color: #C65F4F;
//     min-height: 100%;
//     /* position: fixed; */
// `;

// export const Sidebar = () => (
//     <Styles>
//     <SideNav
//         onSelect={(selected) => {
//             // Add your code here
//         }}
//     >
//         <SideNav.Toggle />
//         <SideNav.Nav defaultSelected="home">
//             <NavItem eventKey="home">
//                 <NavIcon>
//                     <i
//                         className="fa fa-fw fa-home"
//                         style={{ fontSize: "1.75em" }}
//                     />
//                 </NavIcon>
//                 <NavText>Home</NavText>
//             </NavItem>
//             <NavItem eventKey="charts">
//                 <NavIcon>
//                     <i
//                         className="fa fa-fw fa-line-chart"
//                         style={{ fontSize: "1.75em" }}
//                     />
//                 </NavIcon>
//                 <NavText>Charts</NavText>
//                 <NavItem eventKey="charts/linechart">
//                     <NavText>Line Chart</NavText>
//                 </NavItem>
//                 <NavItem eventKey="charts/barchart">
//                     <NavText>Bar Chart</NavText>
//                 </NavItem>
//             </NavItem>
//         </SideNav.Nav>
//     </SideNav>
//     </Styles>
// );
