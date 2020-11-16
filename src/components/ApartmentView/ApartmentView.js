import React from 'react';
import './ApartmentView.css';
import main from '../../images/mainview.png'
import view2 from '../../images/view2.png'
import view3 from '../../images/view3.png'
import view4 from '../../images/view4.png'
import view5 from '../../images/view5.png'

const ApartmentView = () => {
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
                                <img src={main} alt=""/>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3">
                                <img src={view2} alt=""/>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3">
                            <img src={view3} alt=""/>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3">
                            <img src={view4} alt=""/>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3">
                            <img src={view5} alt=""/>
                            </div>
                        </div>
                        </div>
                        <p></p>
                        <div className="apartment-name">
                            <div className="d-flex justify-content-between">
                                <h3>Family Apartment Three</h3>
                                <h3>$256</h3>
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
                        <form className="booking" action="">
                            <input className="form-control" type="text" placeholder="Full Name"/>
                            <p></p>
                            <input className="form-control" type="text" placeholder="Phone No."/>
                            <p></p>
                            <input className="form-control" type="text" placeholder="Email Address"/>
                            <p></p>
                            <textarea className="form-control" name="" id=""  rows="5" placeholder="Message"></textarea>
                            <p></p>
                            <input className="form-control bg-color-apartment" type="submit" value='Request Booking'/>
                            <p></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentView;