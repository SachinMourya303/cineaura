import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from 'react-router-dom'
import '/src/Components/Navbar/Navbar.css'

const SearchBox = () => {

    const [findData, setFindData] = useState("");
    const name = [findData];

    const onChange = (e) => {
        setFindData(e.target.value);
    }

    return (

        <div className='col-12 mt-5'>

                <div className='col-12 d-flex justify-content-center'>
                    <ul className='col-10 col-md-7 d-flex justify-content-between list-unstyled overflow-x-auto gap-2 gap-md-0'>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/action" className="nav-link text-secondary">Action</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/comedy" className="nav-link text-secondary">Comedy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/thriller" className="nav-link text-secondary">Thriller</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/romance" className="nav-link text-secondary">Romance</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Mystery" className="nav-link text-secondary">Mystery</NavLink>
                    </li>
                </ul>
                </div>

            <div className='d-flex justify-content-center'>
                <div className='col-10 col-md-6 search-bar flex-row rounded-5 d-flex mt-4' style={{ background: "#ffffff2c" }}>
                    <input type="text" placeholder='Search your favourite movie...' className='form-control border-0 bg-transparent text-white shadow-none'
                        onChange={onChange} value={findData} />
                    <NavLink to={`/searchedmovie/${name}`} className='btn bi bi-search text-white border-0' type='submit'></NavLink>
                </div>
            </div>
        </div>
    )
}

export default SearchBox