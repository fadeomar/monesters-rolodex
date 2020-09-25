import React from "react";

import "./style.css";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    // onChange={}
  />
);

export default SearchBox;
