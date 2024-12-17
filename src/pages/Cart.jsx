import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    settotalAmount( cart.reduce ( (acc , curr) => acc + curr.price , 0 ) )
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ? (<div className=" w-full justify-center  flex gap-40 "><div>
        
          {
            cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            }) 
          }
        </div>
          
          <div className=" flex flex-col mt-24 h-[40vh] justify-between ">
            <div className=" flex flex-col ">
            <div className=" text-green-700 font-semibold uppercase text-lg">Your Cart</div>
            <div className=" text-green-700 font-bold text-5xl uppercase">Summary</div>
            <p className=" mt-3"><span className=" text-green-700 font-bold ">Total Items: {cart.length}</span></p>
            </div>
            <div>
            <p className=" font-bold text-lg ">Total Amount :${totalAmount}</p>
            <button className=" w-[20rem] h-[2rem] bg-green-700 p-7 rounded-lg flex items-center justify-center text-white font-bold text-lg">Checkout</button>
          </div>

          </div>
          
          
        </div>) :
          (<div>Cart Empty
              <Link to="/"><button>Shop Now</button></Link>
            </div>)
      
     
      
      
      
      
      }

    </div>
  )
};

export default Cart;
