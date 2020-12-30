import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">InfoList</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-primary mx-2" aria-current="page" exact to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-primary" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn btn-primary mx-2" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-outline-light mr-5" exact to="/user/add">AddUser</Link>
            </div>
        </nav>
    );
}

export default Navbar;
