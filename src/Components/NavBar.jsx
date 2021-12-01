import React from 'react'

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <ul className="leftNav">
                    <li><a href="/"><span>TazaNews</span></a></li>
                    <li><a href="/">home</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
                <div className="rightNav">
                    <div className="searchBar">
                        <textarea  name="search" id="search" cols="30" rows="10" placeholder="Search" />
                        {/* <!-- <button id="searchBtn">search</button> --> */}
                    </div>

                </div>
            </div>

        </>
    )
}
