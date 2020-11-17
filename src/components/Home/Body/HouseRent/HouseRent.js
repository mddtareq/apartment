import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HouseRent.scss';
import location from '../../../../images/logos/map-marker-alt-solid 1.png';
import bedroom from '../../../../images/logos/bed 1.png';
import bathroom from '../../../../images/logos/bath 1.png';
import { Link } from 'react-router-dom';

const HouseRent = ({ houseRent }) => {
    console.log(houseRent)
    return (
        <section id="houses">
            <Container>
                <Row>
                    {
                        houseRent.map(house =>
                            <Col lg={4} md={6} sm={6} key={house._id}>
                                <Card style={{ width: '100%' }} className="mt-4">
                                    <Card.Img variant="top" src={`data:image/png;base64,${house.img.img}`}  />
                                    <Card.Body>
                                        <Card.Title className="mb-1">{house.name}</Card.Title>
                                        <div className="house-location">
                                            <img src={location} alt="locationLogo" />
                                            <small className="text-secondary small">{house.location}</small>
                                        </div>
                                        <div className="rooms d-flex justify-content-between">
                                            <div className="bedroom">
                                                <img src={bedroom} alt="bedroomLogo" />
                                                <small className="text-secondary small">{house.bedroom} Bedrooms</small>
                                            </div>
                                            <div className="bathroom">
                                                <img src={bathroom} alt="bathroomLogo" />
                                                <small className="text-secondary small">{house.bathroom} Bathrooms</small>
                                            </div>
                                        </div>
                                        <div className="price-button d-flex justify-content-between mt-4">
                                            <h2>${house.price}</h2>
                                            <Link to={`/home/details/${house._id}`}>
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default HouseRent;