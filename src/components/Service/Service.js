import React from 'react';
import AddBooking from './AddBooking/AddBooking';
import BookingList from './BookingList/BookingList';
import Rent from './Rent/Rent';
import List from '../../Icon/list.jpg';
import Plus from '../../Icon/plus 1.png';
import rentI from '../../Icon/Group 33351.png';

const Service = () => {

    const list = () => {
        document.getElementById('list').style.display = 'block';
        document.getElementById('add').style.display = 'none';
        document.getElementById('rent').style.display = 'none';
    }
    const add = () => {
        document.getElementById('list').style.display = 'none';
        document.getElementById('add').style.display = 'block';
        document.getElementById('rent').style.display = 'none';
    }
    const rent = () => {
        document.getElementById('list').style.display = 'none';
        document.getElementById('add').style.display = 'none';
        document.getElementById('rent').style.display = 'block';
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <br /><br />
                    <button onClick={list} style={{ border: 'none', background: "none", outline: 'none' }}><p> <img style={{ width: '17px', marginBottom: '5px' }} src={List} alt="" />  Booking list</p></button>
                    <br />
                    <button onClick={add} style={{ border: 'none', background: "none", outline: 'none' }}><p > <img style={{ width: '17px', marginBottom: '4px' }} src={Plus} alt="" />  Add Rent House</p></button>
                    <br />
                    <button onClick={rent} style={{ border: 'none', background: "none", outline: 'none' }}><p > <img style={{ width: '17px', marginBottom: '5px' }} src={rentI} alt="" /> My rent</p></button>
                </div>
                <div className="col-md-10">
                    <div id="list">
                        <BookingList></BookingList>
                    </div>
                    <div style={{display: 'none'}} id="rent">
                        <Rent></Rent>
                    </div>
                    <div style={{display: 'none'}} id="add">
                        <AddBooking></AddBooking>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;