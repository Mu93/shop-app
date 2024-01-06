"use client";
const SortDropdown = ({ handleSort }) => (
  <select
    className="p-3 border h-12 text-black"
    onChange={(e) => handleSort(e.target.value)}
  >
    <option value="name">Sort by Name</option>
    <option value="price">Sort by Price</option>
  </select>
);
export default SortDropdown;
