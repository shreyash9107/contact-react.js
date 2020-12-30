import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom';

const ViewUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        var result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    };

    const backHome = () => {
        history.push('/')
    }

    const style = {
        position: 'relative',
        top: '20px',
        left: '-500px',
        color: 'black'
    }

    return (
        <div className="container mt-5 shadow-b">
            <h2 className="text-md-start mb-3" >View User Details</h2>
            <button className="btn btn-primary" style={style} onClick={() => backHome()}>Back To Home</button>
            <table class="table table-success table-striped mt-5 shadow-lg">
                <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">UserName:</th>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone:</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Website:</th>
                        <td>{user.website}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default ViewUser;
