import React from 'react'
import SearchBar from './SearchBar';
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/"><span>TazaNews</span></Link>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <SearchBar />
                </div>
            </nav>
            <Outlet />
        </>
    )
}
