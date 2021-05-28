import React from "react";

import "./search-box.styles.css";

// Create functional component to render HTML
// Gets props and returns html
// Do not have internal state or access to life-cycle methods
export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
