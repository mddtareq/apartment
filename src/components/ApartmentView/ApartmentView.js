import React, { useContext, useEffect, useState } from 'react';
import './ApartmentView.css';
import main from '../../images/mainview.png'
import view2 from '../../images/view2.png'
import view3 from '../../images/view3.png'
import view4 from '../../images/view4.png'
import view5 from '../../images/view5.png'
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const ApartmentView = () => {
    const {id} = useParams();
    const [house, setHouse] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/house/${id}`)
        .then( res => res.json())
        .then(result => setHouse(result));
    }, [id]);
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [reqInfo, setReqInfo] = useState({});
    const [msg, setMsg] = useState('');
    const getValue = (e) => {
        const newReqInfo = { ...reqInfo };
        newReqInfo[e.target.name] = e.target.value;
        newReqInfo.status = 0;
        setReqInfo(newReqInfo);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (loggedInUser.name) {
            if (!reqInfo.name && !reqInfo.phone && !reqInfo.email && !reqInfo.message) {
                alert("All Input Field Empty");
            }
            else if (!reqInfo.name) {
                alert("Name is Empty");
            }
            else if (!reqInfo.phone) {
                alert("Phone is Empty");
            }
            else if (!reqInfo.email) {
                alert("Email is Empty");
            }
            else if (!reqInfo.message) {
                alert("Message is Empty");
            } else {
                fetch("http://localhost:5000/addBooking", {
                    method: "POST",
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                    body: JSON.stringify(reqInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            setMsg("Request Booking Successfully")
                        }
                    })
            }
        } else {
            history.push("/login");
        }
    };
    return (
        <div>
            <div className="container-fluid apartment-details-header">
                <h1 className="text-center">Apartment</h1>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 apartment-details">
                        <div className="apartment-view">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={main} alt="" />
                                </div>
                                <div className="col-6 col-sm-3 col-md-3">
                                    <img src={view2} alt="" />
                                </div>
                                <div className="col-6 col-sm-3 col-md-3">
                                    <img src={view3} alt="" />
                                </div>
                                <div className="col-6 col-sm-3 col-md-3">
                                    <img src={view4} alt="" />
                                </div>
                                <div className="col-6 col-sm-3 col-md-3">
                                    <img src={view5} alt="" />
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div className="apartment-name">
                            <div className="d-flex justify-content-between">
                                <h3>{house.name}</h3>
                                <h3>${house.price}</h3>
                            </div>
                            <p>
                                3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                            </p>
                        </div>
                        <div className="price-details">
                            <h3>Price Details</h3>
                            <p>Rent/Month: $550 (negotiable)</p>
                            <p> Service Charge : 8,000/= Tk per month</p>
                            <p> subject to change Security Deposit : 3 month’s rent</p>
                            <p> Flat Release Policy : 3 months earlier notice required</p>
                        </div>
                        <div className="property-details">
                            <h3>Property Details</h3>
                            <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                            <p>Flat Size : 3000 Sq Feet.</p>
                            <p>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                            <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                            <p>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                            <p>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                            <p> Flat Release Policy : 3 months earlier notice required</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {
                         msg &&
                         <Alert variant="success">
                            {msg}
                         </Alert>
                        }
                        <form className="booking" action="" onSubmit={handleSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                onChange={(e) => getValue(e)}
                            />
                            <p></p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Phone No."
                                name="phone"
                                onChange={(e) => getValue(e)}
                            />
                            <p></p>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                onChange={(e) => getValue(e)}
                            />
                            <p></p>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Message"
                                name="message"
                                onChange={(e) => getValue(e)}
                            ></textarea>
                            <p></p>
                            <input className="form-control bg-color-apartment" type="submit" value='Request Booking' />
                            <p></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentView;