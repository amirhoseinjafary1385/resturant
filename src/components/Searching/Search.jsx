import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// فایل استایل را اضافه کنید
import './Search.css'; 


const Search = ({ onSearch }) => {
    const [query, setQuery ] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return(
        <div className = "search-container">
            <input 
            type= "text"
            value={query} 
            onChange={handleChange} 
            placeholder= "Search recipes"
            />
        <button className='search-btn' onClick={handleSearch}>جستجو کنید</button>
        </div>
    );
};


export default Search;