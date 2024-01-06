'use client'

import {
  ItemList,
  Pagination,
  PriceFilter,
  SearchBar,
  ShoppingCart,
  SortDropdown,
} from './components'
import { useProductContext } from './context/Product/ProductContext'

const Home = () => {
  const {
    cart,
    showCart,
    filteredItems,
    priceFilter,
    searchTerm,
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
  } = useProductContext()
  return (
    <main className="mt-12  flex flex-col justify-center items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-3/4 content-center h-8">
        <SortDropdown handleSort={handleSort} />
        <PriceFilter handleFilter={handleFilter} priceFilter={priceFilter} />
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700   h-12"
          onClick={() => handleReset()}
        >
          Rest
        </button>
      </section>

      <section className="flex w-3/4 justify-center items-center">
        {filteredItems.length ? (
          <ItemList items={filteredItems} handleAddToCart={handleAddToCart} />
        ) : (
          <>
            <div className="h-[70vh] flex flex-col items-center justify-center">
              <p className="font-bold text-4xl">
                Sorry! .. There is no item match your need.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-24 mt-5"
                onClick={() => handleReset()}
              >
                Rest
              </button>
            </div>
          </>
        )}
      </section>

      <section
        className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg overflow-y-auto ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <ShoppingCart
          cart={cart}
          handleCheckout={handleCheckout}
          removeFromCart={removeFromCart}
          closeCart={closeCart}
        />
      </section>
    </main>
  )
}

export default Home
