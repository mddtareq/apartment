import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png';
import './AppBar.scss';

const AppBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="p-2">
            <Container>
                <NavLink exact to="/" className="company-logo">
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/concerns">Concerns</NavLink>
                        <NavLink to="/event">Event</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login"><button className="button ml-2">Login</button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppBar;