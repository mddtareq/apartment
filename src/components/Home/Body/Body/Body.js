import React from 'react';
import HouseRent from '../HouseRent/HouseRent';
import Service from '../Service/Service';
import './Body.scss';

const Body = ({ houseRent, service }) => {
    return (
        <main>
            <div className="house-rent">
                <h4>House Rent</h4>
                <h2 className="mb-4">Discover the latest Rent <br /> available today</h2>
                <HouseRent houseRent={houseRent} />
            </div>
            <div className="service mt-5">
                <h4>Service</h4>
                <h2 className="mb-4">We're an agency tailored to all <br /> clients' needs that always delivers</h2>
                <Service service={service} />
            </div>
        </main>
    );
};

export default Body;