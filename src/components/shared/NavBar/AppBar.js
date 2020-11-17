import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/Logo.png';
import './AppBar.scss';

const AppBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const handleLogOut = () => {
        setLoggedInUser({});
    };
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
                        {
                         loggedInUser.isSignedIn ?
                         <button className="button ml-2" onClick={handleLogOut}>Log Out</button>
                         :
                         <button className="button ml-2" onClick={handleLogin}>Login</button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default AppBar;