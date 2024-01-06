const ItemCard = ({ name, description, price, handleAddToCart }) => (
  <div className="p-4 border mb-4">
    <h3 className="text-lg font-semibold mb-2 text-black">{name}</h3>
    <p className="text-gray-700 mb-2">{description}</p>
    <p className="text-green-600 font-semibold">Price: ${price}</p>
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
    >
      Add to Cart
    </button>
  </div>
);

export default ItemCard;
