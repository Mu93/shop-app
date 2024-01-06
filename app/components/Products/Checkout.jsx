const Checkout = ({ total }) => (
  <div>
    <h2 className="text-black text-xl font-semibold">Checkout</h2>
    <p className="text-black text-xl font-semibold">
      Total: ${total.toFixed(2)}
    </p>
    <button>Place Order</button>
  </div>
);
export default Checkout;
