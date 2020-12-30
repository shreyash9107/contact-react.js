import React, { useState, } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    const { name, username, email, website, phone } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post(`http://localhost:3003/users`, user)
        history.push('/')
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="mb-3">Add User Details</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Username name"
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={phone}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your website"
                            name="website"
                            value={website}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary w-75">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;