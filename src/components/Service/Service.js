import React, { useState } from 'react';
import AddBooking from './AddBooking/AddBooking';
import BookingList from './BookingList/BookingList';
import Rent from './Rent/Rent';
import SideNav from './SideNav/SideNav';
import Logo from '../../Icon/Logo.png';
import List from '../../Icon/list.jpg';
import Plus from '../../Icon/plus 1.png';
import rentI from '../../Icon/Group 33351.png';

const Service = () => {

    const list= () => {
        document.getElementById('list').style.display='block';
        document.getElementById('add').style.display='none';
        document.getElementById('rent').style.display='none';
    }
    const add= () => {
        document.getElementById('list').style.display='none';
        document.getElementById('add').style.display='block';
        document.getElementById('rent').style.display='none';
    }
    const rent= () => {
        document.getElementById('list').style.display='none';
        document.getElementById('add').style.display='none';
        document.getElementById('rent').style.display='block';
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <br/><br/>
                    <button onClick={list} style={{border:'none',background:"none",outline:'none'}}><p> <img style={{ width: '17px', marginBottom: '5px' }} src={List} alt="" />  Booking list</p></button>
                    <br/>
                    <button onClick={add} style={{border:'none',background:"none",outline:'none'}}><p > <img style={{ width: '17px', marginBottom: '4px' }} src={Plus} alt="" />  Add Rent House</p></button>
                    <br/>
                    <button onClick={rent} style={{border:'none',background:"none",outline:'none'}}><p > <img style={{ width: '17px', marginBottom: '5px' }} src={rentI} alt="" /> My rent</p></button>
                </div>
                <div className="col-md-9">
                    <div id="list">
                    <BookingList></BookingList>
                    </div>
                    <div id="rent">
                    <Rent></Rent>
                    </div>
                    <div id="add">
                    <AddBooking></AddBooking>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;