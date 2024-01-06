"use client";
import { createContext, useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  //
  const [filteredItems, setFilteredItems] = useState(items);
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");
  const [priceFilter, setPriceFilter] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // =======================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product");
        const result = await response.json();
        setItems(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // =======================
  useEffect(() => {
    // Filter items by name
    const filteredByName = items?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter items by price range
    const filteredByPrice = priceFilter
      ? filteredByName?.filter((item) => item.price <= parseFloat(priceFilter))
      : filteredByName;

    // Sort items
    const sortedItems = filteredByPrice?.sort((a, b) => {
      if (sortType === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "price") {
        return a.price - b.price;
      }
      return 0;
    });

    setFilteredItems(sortedItems);
  }, [searchTerm, priceFilter, sortType, items]);
  // =======================
  const handleSearch = (value) => setSearchTerm(value);

  const handleSort = (value) => setSortType(value);

  const handleFilter = (value) => setPriceFilter(value);
  // =======================
  // handle cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setShowCart(true);
  };
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Checkout:");
  };

  const handleReset = () => {
    setSearchTerm("");
    setPriceFilter("");
  };
  return (
    <ProductContext.Provider
      value={{
        items,
        cart,
        showCart,
        filteredItems,
        priceFilter,
        searchTerm,
        // Pagination
        itemsPerPage,
        paginatedItems,
        currentPage,
        handlePageChange,

        // filter
        handleSearch,
        handleSort,
        handleFilter,
        //cart
        handleAddToCart,
        removeFromCart,
        closeCart,
        handleCheckout,
        // reset
        handleReset,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
