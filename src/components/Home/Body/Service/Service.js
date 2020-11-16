import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.scss';

const Service = ({service}) => {
    return (
        <section id="service" className="mt-5">
            <Container>
                <Row>
                    {
                     service.map(service =>
                      <Col lg={4} md={4} sm={6} key={service.id} className="text-center mt-3">
                          <img src={service.logo} alt="serviceLogo" />
                          <h3 className="mt-4">{service.name}</h3>
                          <p>{service.description}</p>
                      </Col>
                    )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Service;