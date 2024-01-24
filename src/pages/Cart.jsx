import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto mt-10">
      {cart.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">Your Cart</div>
              <div>Summary</div>
              <p>
                <span className="text-sm">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-lg font-bold">
              <p>Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
