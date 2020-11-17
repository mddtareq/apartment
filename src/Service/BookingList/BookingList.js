import React from 'react';
import SideNav from '../SideNav/SideNav';
import './BookingList.css'

const BookingList = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideNav/>
            </div>
            <div className="col-md-10 mt-3">
                <p style={{fontWeight:'bold'}}> Booking List <small style={{float:'right', marginRight:'50px', fontWeight:'bold'}}>User name</small></p>
                <div className="big-sec">
                    <div className="small-sec">
                    <div className="table-sec">
                        <table class="table table-borderless">
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
                                {/* {
                                    serviceList.map(service =>
                                         <tr>
                                            <td>{service.name} </td>
                                            <td>{service.email} </td>
                                            <td>{service.projectName} </td>
                                            <td>{service.details} </td>
                                            <td>{} </td>
                                         </tr> )
                                } */}
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