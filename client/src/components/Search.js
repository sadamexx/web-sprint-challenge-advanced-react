import React from 'react';

export const Search = ({ changeHandler }) => (
    <input 
        className='search'
        type='search'
        placeholder='Search'
        onChange={changeHandler}
    />
);