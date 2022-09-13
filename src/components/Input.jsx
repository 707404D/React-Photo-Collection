import React from "react";

const Input = ({ searchValue, setSearchValue }) => {
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="search-input"
      placeholder="Поиск по названию"
    />
  );
};

export default Input;
