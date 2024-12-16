import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="search-box">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
