import React, { useState } from 'react';
import './AddBooking.css'

const AddBooking = () => {
    const [allValue, setAllValue] = useState({})
    const handleChange = (e) => {
        const newAddFlat = { ...allValue };
        newAddFlat[e.target.name] = e.target.value;
        setAllValue(newAddFlat);
    }
    const [file, setFile] = useState(null);
    const handleImage = (e) => {
        const files = e.target.files[0];
        setFile(files);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(allValue.name)
        let formData = new FormData();
        formData.append('file', file);
        formData.append('name', allValue.name);
        formData.append('location', allValue.location);
        formData.append('price', allValue.price);
        formData.append('bedroom', allValue.bedroom);
        formData.append('bathroom', allValue.bathroom);
        console.log(formData);

        fetch('https://tranquil-ocean-50550.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => console.log(result));
    }


    return (
        <div className="row">
            <div className="col-md-12 mt-3">
                <p style={{ fontWeight: 'bold' }}> Add Rent House <small style={{ float: 'right', marginRight: '50px', fontWeight: 'bold' }}>User name</small></p>
                <div className="big-sec">
                    <form onSubmit={handleSubmit}>
                        <div className="row add-sec">
                            <div className="col-md-6">
                                <label htmlFor="title">Service Title</label> <br />
                                <input onChange={handleChange} type="text" name="name" id="" placeholder="Enter Title" />
                                <br />
                                <label htmlFor="location">Location</label> <br />
                                <input onChange={handleChange} type="text" name="location" id="" placeholder="Enter location" />
                                <br />
                                <label htmlFor="bathroom">No of Bathrooms</label> <br />
                                <input onChange={handleChange} type="number" name="bathroom" id="" placeholder="Enter bathroom count" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price">Price</label> <br />
                                <input onChange={handleChange} type="number" name="price" id="" placeholder="Price" />
                                <br />
                                <label htmlFor="bedroom">No of Bedrooms</label> <br />
                                <input onChange={handleChange} type="number" name="bedroom" id="" placeholder="Enter bedroom count" />
                                <br />
                                <label htmlFor="file">Thumbnail</label> <br />
                                <input onChange={handleImage} type="file" name="image" id="" placeholder="Upload image" />
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