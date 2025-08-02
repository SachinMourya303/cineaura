import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from 'react-router-dom'
import '/src/Components/Navbar/Navbar.css'
import axios from 'axios'

const Navbar = () => {


    const [findData , setFindData ] = useState("");
    const name = [findData];
    
    const onChange = (e) => {
        setFindData(e.target.value);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark w-100">
                <div className="container-fluid">
                    <a href="/" className='navbar-brand p-1'><i className='bi bi-film'></i>CineAura</a>

                    <button className='navbar-toggler border-0'>
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvas" data-bs-toggle="offcanvas"></span>
                    </button>

                    <div className="offcanvas offcanvas-top" id='offcanvas' style={{background:"#000" ,height:"40vh"}}>
                        <div className="offcanvas-header">
                            <button className='btn bi bi-x text-white ms-auto fs-1' data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav gap-3 text-center" style={{height:"100%"}}>
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
                    <div className='search-bar flex-row rounded-5 d-none d-md-flex' style={{ background: "#ffffff2c" }}>
                        <input type="text" placeholder='Search your favourite movie...' className='form-control border-0 bg-transparent text-white d-none d-md-block shadow-none' 
                        onChange={onChange} value={findData}/>
                        <NavLink to={`/searchedmovie/${name}`} className='btn bi bi-search text-white d-none d-md-block border-0' type='submit'></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar