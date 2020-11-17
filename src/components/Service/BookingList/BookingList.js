import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './BookingList.css'

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("https://tranquil-ocean-50550.herokuapp.com/getAllBooking")
            .then(res => res.json())
            .then(result => setBookings(result));
    }, [])
    const statusHandler = (e) => {
        
    };
    return (
        <div className="row">
            <div className="col-md-12 mt-3">
                <p style={{ fontWeight: 'bold' }}> Booking List <small style={{ float: 'right', marginRight: '50px', fontWeight: 'bold' }}>User name</small></p>
                <div className="big-sec">
                    <div className="small-sec">
                        <div className="table-sec">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookings.map(booking =>
                                            <tr key={booking._id}>
                                                <td>{booking.name} </td>
                                                <td>{booking.email} </td>
                                                <td>{booking.phone} </td>
                                                <td>{booking.message} </td>
                                                <td>
                                                 {
                                                  booking.status === 0 ?
                                                  <Form.Control as="select" className='text-danger' onChange={statusHandler}>
                                                  <option  selected style={{color:'#FF4545'}}>Pending</option>
                                                  <option style={{color:'#009444'}}>Done</option>
                                                   </Form.Control>
                                                   :
                                                   <Form.Control as="select" className='text-success' onChange={statusHandler}>
                                                   <option style={{color:'#FF4545'}}>Pending</option>
                                                   <option selected  style={{color:'#009444'}}>Done</option>
                                                    </Form.Control>
                                                 }   
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;