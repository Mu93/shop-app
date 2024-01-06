"use client";
const SearchBar = ({ handleSearch, searchTerm }) => (
  <input
    className="p-3 border h-12 text-black"
    type="text"
    placeholder="Search by name"
    value={searchTerm}
    onChange={(e) => handleSearch(e.target.value)}
  />
);

export default SearchBar;
