import Link from "next/link";

const ShoppingCart = ({ cart, closeCart, removeFromCart, handleCheckout }) => (
  <div className="p-2 h-screen">
    <div className="flex justify-between items-center p-3 border-b h-20">
      <h2 className="text-xl font-semibold text-black">Shopping Cart</h2>
      <span className="" onClick={() => closeCart(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </span>
    </div>
    <div className="h-[calc(100vh-13.8rem)] mt-5 overflow-auto">
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
    {/* Add checkout button and other styling */}
    <div className="items-center justify-between h-28 border-t">
      <div className="flex items-center justify-between ">
        <span className="text-2xl font-bold text-black">Subtotal:</span>
        <span className="text-2xl font-bold text-black">$152</span>
      </div>
      <div className="flex items-center justify-center ">
        <Link href="/checkout">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default ShoppingCart;
