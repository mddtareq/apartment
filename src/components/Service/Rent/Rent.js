import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Rent = () => {
    const [rent, setRent] = useState([]);

    useEffect(() => {
        fetch("https://tranquil-ocean-50550.herokuapp.com/getAllRent")
        .then(res => res.json())
        .then(result => setRent(result));
    },[])
    return (
        <div className="row">
            <div className="col-md-12 mt-3">
               <p style={{fontWeight:'bold'}}> My Rent <small style={{float:'right', marginRight:'50px', fontWeight:'bold'}}>User name</small></p>
               <div className="big-sec">
                <div className="small-sec">
                        <div className="table-sec">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">House Name</th>
                                        <th scope="col">Price</th>
                                        <th style={{float:'right'}} scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        rent.map(rent =>
                                            <tr key={rent._id}>
                                                <td>{rent.name} </td>
                                                <td>${rent.price} </td>
                                                <td style={{float:'right'}}>
                                                    <Button 
                                                    variant="success"
                                                    >
                                                        Action
                                                    </Button>
                                                </td>
                                            </tr> )
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

export default Rent;