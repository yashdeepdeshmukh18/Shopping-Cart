import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";



const Cart = () => {

  const {cart} = useSelector( (state) => state);
  
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0))
  },[cart])

  return (
    <div >
    {
      cart.length > 0 ?
      (<div className="grid grid-cols-1 max-w-5xl mx-auto mt-5 gap-10 mb-10">
        <div >
          {
            cart.map( (item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index } />
            })
          }
        </div>

        <div className="font-semibold">
          <div>Your Cart</div>
          <div >Summary</div>
          <p>
            <span>Total Items: {cart.length} </span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Total Amount: <span className="text-green-600">${totalAmount}</span></p>
          <button className="border rounded-md p-2 bg-green-400 font-semibold">Checkout Now</button>
        </div>

      </div>) :
      (<div className="flex flex-col justify-center items-center mt-20 gap-5 min-h-[75vh]">
        <p className="text-lg font-semibold">Your Cart is empty!</p>
        <Link to={"/"}>
          <button className="border rounded-md p-2 bg-green-400 font-semibold">
            Shop Now 
          </button>
        </Link>
      </div>)
    }

    </div>
  );
};

export default Cart;
