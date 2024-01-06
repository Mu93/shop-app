"use client";

import { useProductContext } from "../context/Product/ProductContext";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useProductContext();

  return (
    <section className="container m-auto mt-12">
      <h1 className="text-2xl font-bold text-black">Checkout Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
        <div className="mt-5">
          {cart.length ? (
            cart.map((item) => (
              <div key={item.id} className="p-4 border mb-4">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  {item.name}
                </h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-semibold">
                    Price: ${item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl">Cart item is empty! </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
