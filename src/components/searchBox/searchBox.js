import React from 'react';
import './searchBar.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <div className='container'>
        <form action="" className="search-bar">
            <input 
                type="search" 
                name="search" 
                pattern=".*\S.*"
                placeholder={ placeholder }
                required 
                onChange={ handleChange }/>
                <button className="search-btn" type="submit">
                    <span>Search</span>
                </button>
        </form>
    </div>
    );
    
}