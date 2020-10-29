import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from "styled-components"

const Styles = styled.div`
.navbar{
    background-color: #efefef;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
    /* position: absolute; */
    /* left: 100%; */
    margin-left: 67px;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #DF2026;
    margin-left: 10px;

    &:hover{
        color: salmon;
    }
}

.brand{
    font-weight: bold;
    font-style: italic;
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" >
        <Navbar.Brand href="/" className = "brand" >Hectre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item> <Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item> <Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item> <Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);