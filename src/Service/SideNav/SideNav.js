import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Icon/Logo.png';
import List from '../../Icon/list.jpg';
import Plus from '../../Icon/plus 1.png';
import Rent from '../../Icon/Group 33351.png';


const SideNav = () => {
    return (
        <div className="container ml-4">
            <Link to="/"><img className="logo-img" style={{width:'80px', marginTop:'20px'}} src={Logo} alt=""/></Link>
            <Link to="/bookingList"><p style={{ marginTop:'70px', color:'black',fontSize:'13px'}}> <img style={{width:'17px', marginBottom:'5px'}} src={List} alt=""/>  Booking list</p></Link>
            <Link to="/addBooking"><p style={{ marginTop:'20px', color:'black' ,fontSize:'13px'}}> <img style={{width:'17px',  marginBottom:'4px'}} src={Plus} alt=""/>  Add Rent House</p></Link>
            <Link to="/rent"><p style={{color:'black',fontSize:'13px'}}> <img style={{width:'17px',marginBottom:'5px'}} src={Rent} alt=""/> My rent</p></Link>
        </div>
    );
};

export default SideNav;