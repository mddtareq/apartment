import React, { useEffect, useState } from 'react';
import Body from '../Body/Body/Body';
import Header from '../Header/Header';

import service1 from '../../../images/logos/apartment 1.png';
import service2 from '../../../images/logos/affordable 1.png';
import service3 from '../../../images/logos/lessee 1.png';

const Home = () => {
    const [houseRent, setHouseRent] = useState([]);

    useEffect( () => {
        fetch("https://tranquil-ocean-50550.herokuapp.com/getAllHouse")
        .then(res => res.json())
        .then(result => setHouseRent(result))
    },[]);

    const service = [
        {
          id: 1,
          name: "Wide Range of Properties",
          description: "With a robust selection of popular properties on hand, as well as leading properties from experts.",
          logo: service1
        },
        {
          id: 2,
          name: "Financing Made Easy",
          description: "Our stress-free finance department that can find financial solutions to save you money.",
          logo: service2
        },
        {
          id: 3,
          name: "Trusted by Thousands",
          description: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
          logo: service3
        }
    ];
    return (
        <>
        <Header />
        <Body houseRent={houseRent} service={service} />
        </>
    );
};

export default Home;