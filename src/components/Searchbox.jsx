import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/Searchbox/searchboxSlice'; // Import setSearchTerm from filtersSlice

function Searchbox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className="searchBoxContainer">
      <input
        type="text"
        className="searchbox"
        placeholder="search by country name..."
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
}

export default Searchbox;
