import React from "react";

const SearchBox = ({searchChange}) => (
    <div className="pa2">
        <input 
        className="" 
        type="search" 
        placeholder="Search..." 
        onChange= {searchChange} />
    </div>
);

export default SearchBox;