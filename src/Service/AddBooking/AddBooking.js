import React from 'react';
import SideNav from '../SideNav/SideNav';
import './AddBooking.css'

const AddBooking = () => {



    const handleBlur = () =>{

    }

    const handleFileChange = () =>{

    }

    const handleSubmit = () =>{

    }

    return (
        <div className="row">
            <div className="col-md-2">
                <SideNav/>
            </div>
            <div className="col-md-10 mt-3">
                <p style={{fontWeight:'bold'}}> Booking List <small style={{float:'right', marginRight:'50px', fontWeight:'bold'}}>User name</small></p>
                <div className="big-sec">
                <form onSubmit={handleSubmit}>
                    <div className="row add-sec">
                        <div className="col-md-6">
                            <label htmlFor="title">Service Title</label> <br/>
                            <input onBlur={handleBlur} type="text" name="title" id="" placeholder="Enter Title"/>
                            <br/>
                            <label htmlFor="location">Location</label> <br/>
                            <input onBlur={handleBlur} type="text" name="location" id="" placeholder="Enter location"/>
                            <br/>
                            <label htmlFor="bathroom">No of Bathrooms</label> <br/>
                            <input onBlur={handleBlur} type="number" name="bathroom" id="" placeholder="Enter bathroom count"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="price">Price</label> <br/>
                            <input onBlur={handleBlur} type="number" name="price" id="" placeholder="Price"/>
                            <br/>
                            <label htmlFor="bedroom">No of Bedrooms</label> <br/>
                            <input onBlur={handleBlur} type="number" name="bedroom" id="" placeholder="Enter bedroom count"/>
                            <br/>
                            <label htmlFor="file">Thumbnail</label> <br/>
                            <input onChange={handleFileChange} type="file" name="" id="" placeholder="Upload image"/>
                        </div>
                    </div>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;