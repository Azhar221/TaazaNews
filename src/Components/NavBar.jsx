// import React, { useState } from 'react'
import SearchBar from './SearchBar';
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/news"><span>TazaNews</span></Link></li>
                </ul>
                <ul>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <SearchBar />

                </ul>
            </div>
            <Outlet />
        </>
    )
}
