import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import location from '../../../images/logos/map.png';
import { NavLink } from 'react-router-dom';
import facebook from '../../../images/logos/Vector.png';
import instra from '../../../images/logos/Vector-1.png';
import linkdin from '../../../images/logos/Vector-2.png';
import youtube from '../../../images/logos/Vector-3.png';

const Footer = () => {
    const menu = [
        { id: 1, name: "About" },
        { id: 2, name: "Site Map" },
        { id: 3, name: "Support Center" },
        { id: 4, name: "Terms Condition" },
        { id: 5, name: "Submit Listing" }
    ];

    const links = [
        { id: 1, name: "Quick Links" },
        { id: 2, name: "Rentals" },
        { id: 3, name: "Contact" },
        { id: 4, name: "Terms Conditions" },
        { id: 5, name: "Our blog" }
    ];

    const contact = [
        { id: 1, name: facebook },
        { id: 2, name: instra },
        { id: 3, name: linkdin },
        { id: 4, name: youtube }
    ];
    return (
        <footer className="py-5">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={12} className="mt-3">
                        <div className="location d-flex">
                            <img className="mt-2" src={location} alt="locationLogo" />
                            <h6 className="ml-2">
                                H#340 (4th Floor), Road #24,
                                New DOHS, Mohakhali, Dhaka, Bangladesh
                                Phone: 018XXXXXXXX
                                E-mail: info@company.com
                            </h6>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={6} xs={6} className="mt-3">
                        <div className="company-details">
                            <h5>Company</h5>
                            <ul>
                                {
                                    menu.map(menu =>
                                        <li key={menu.id}>
                                            <NavLink to={`/${menu.name}`}>
                                                {menu.name}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6} className="mt-3">
                        <div className="company-details">
                            <h5>Quick Links</h5>
                            <ul>
                                {
                                    links.map(links =>
                                        <li key={links.id}>
                                            <NavLink to={`/${links.name}`}>
                                                {links.name}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={12} className="mt-3">
                        <div className="company-details">
                            <h5>About Us</h5>
                            <p>
                                We are the top real estate
                                agency in Sydney, with agents
                                available to answer any
                                question 24/7.
                            </p>
                            <div className="contact">
                                {
                                    contact.map(contact =>
                                        <img
                                            key={contact.id}
                                            className="mr-3"
                                            src={contact.name}
                                            alt="contactLogo"
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;