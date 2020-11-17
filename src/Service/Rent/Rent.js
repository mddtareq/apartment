import React from 'react';
import SideNav from '../SideNav/SideNav';

const Rent = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <SideNav/>
            </div>
            <div className="col-md-10 mt-3">
               <p style={{fontWeight:'bold'}}> My Rent <small style={{float:'right', marginRight:'50px', fontWeight:'bold'}}>User name</small></p>
               <div className="big-sec">
                <div className="small-sec">
                        <div className="table-sec">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">House Name</th>
                                        <th scope="col">Price</th>
                                        <th style={{float:'right'}} scope="col">Action</th>
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

export default Rent;