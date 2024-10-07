import React from 'react'

export default function SearchBar() {
    return (
        <>
            <div className="searchBar">
                <input type="text" name="search" id="search" placeholder="Search" />
                <button id="searchBtn">Search</button>
            </div>
        </>
    )
}
