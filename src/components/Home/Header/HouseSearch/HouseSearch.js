import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './HouseSearch.scss';

const HouseSearch = () => {
    return (
        <section id="house-search-area" >
            <Container className="d-flex justify-content-center">
                <div className="search-area">
                    <h2 className="text-center">FIND YOUR HOUSE RENT</h2>
                    <div className="search-box mt-5">
                        <Form>
                            <Row>
                                <Col sm={9}>
                                    <Form.Control type="email" placeholder="Search House" />
                                </Col>
                                <Col sm={3}>
                                    <button className="find-button">Find Now</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

// className="d-flex align-items-center justify-content-center"

export default HouseSearch;