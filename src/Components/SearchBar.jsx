import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <textarea
          name="search"
          id="search"
          cols="30"
          rows="10"
          placeholder="Search"
        />
        {/* <!-- <button id="searchBtn">search</button> --> */}
      </div>
    </>
  );
}
