"use client";
const PriceFilter = ({ handleFilter, priceFilter }) => (
  <input
    className="p-3 border h-12 text-black"
    type="number"
    placeholder="Filter by price"
    value={priceFilter}
    onChange={(e) => handleFilter(e.target.value)}
  />
);

export default PriceFilter;
