import React, { useEffect, useState } from 'react'
import '/src/Components/Footer/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from 'react-router-dom'
import '/src/Components/Navbar/Navbar.css'
import axios from 'axios'

const Footer = () => {


    const [findData, setFindData] = useState("");
    const name = [findData];

    const onChange = (e) => {
        setFindData(e.target.value);
    }

    return (
        <>
            <div className='border-top mt-5 border-secondary d-flex flex-column'>
                <nav className="navbar navbar-expand-md navbar-dark w-100 footer-nav">
                    <div className="container-fluid">
                        <a href="/" className='navbar-brand p-1'><i className='bi bi-film'></i>CineAura</a>

                        <div className="offcanvas offcanvas-top" id='offcanvas' style={{ background: "#000", height: "40vh" }}>
                            <div className="offcanvas-header">
                                <button className='btn bi bi-x text-white ms-auto fs-1' data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav gap-3 text-center" style={{ height: "100%" }}>
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/action" className="nav-link">Action</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/comedy" className="nav-link">Comedy</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/thriller" className="nav-link">Thriller</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/romance" className="nav-link">Romance</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Mystery" className="nav-link">Mystery</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between gap-3 p-0'>
                            <i className='bi bi-instagram text-white'></i>
                            <i className='bi bi-facebook text-white'></i>
                            <i className='bi bi-youtube text-white'></i>
                        </div>
                    </div>
                </nav>

                <div className='d-flex justify-content-center text-center border-top border-secondary'>
                    <div className='text-secondary'><i className='bi bi-c-circle text-secondary'></i> CineAura.dev All Rights Reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer