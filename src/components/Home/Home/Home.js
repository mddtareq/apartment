import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Body from '../Body/Body/Body';
import Header from '../Header/Header';
import image1 from '../../../images/Rectangle 394.png';
import image2 from '../../../images/Rectangle 396.png';
import image3 from '../../../images/Rectangle 398.png';
import image4 from '../../../images/Rectangle 405.png';
import image5 from '../../../images/Rectangle 403.png';
import image6 from '../../../images/Rectangle 404.png';

import service1 from '../../../images/logos/apartment 1.png';
import service2 from '../../../images/logos/affordable 1.png';
import service3 from '../../../images/logos/lessee 1.png';

const Home = () => {
    const houseRent = [
        {
          id: 1,
          name: "Washington Avenue",
          location: "Nasirabad H/S, Chattogram",
          bedrooms: 3,
          bathrooms: 2,
          price: 194,
          image: image1
        },
        {
            id: 2,
            name: "Family Apartment Three",
            location: "Nasirabad H/S, Chattogram",
            bedrooms: 3,
            bathrooms: 2,
            price: 356,
            image: image2
        },
        {
            id: 3,
            name: "Gorgeous house",
            location: "Nasirabad H/S, Chattogram",
            bedrooms: 3,
            bathrooms: 2,
            price: 256,
            image: image3
        },
        {
            id: 4,
            name: "Luxury villa",
            location: "Nasirabad H/S, Chattogram",
            bedrooms: 3,
            bathrooms: 2,
            price: 346,
            image: image4
        },
        {
            id: 5,
            name: "Epic Huda Palacio",
            location: "Nasirabad H/S, Chattogram",
            bedrooms: 3,
            bathrooms: 2,
            price: 446,
            image: image5
        },
        {
            id: 6,
            name: "Washington Avenue",
            location: "Nasirabad H/S, Chattogram",
            bedrooms: 3,
            bathrooms: 2,
            price: 283,
            image: image6
        },
    ];

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