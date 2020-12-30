import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line, RiEyeFill } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUser(result.data.reverse());
    }

    const onUserDelete = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-5">
                <table className="table table-striped table-hover shadow">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row" key={user.id}>{index + 1}</th>
                                <td >{user.name}</td>
                                <td >{user.email}</td>
                                <td >{user.website}</td>
                                <td>
                                    <Link className="me-3" to={`/user/view/${user.id}`}><RiEyeFill /></Link>
                                    <Link className="me-2" to={`/user/edit/${user.id}`}><BsPencil /></Link>
                                    <Link className="mx-1" onClick={() => onUserDelete(user.id)}><RiDeleteBin5Line /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;