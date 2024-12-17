import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item,itemindex }) => {
  
  const dispatch = useDispatch();
  
  const removefromcart = ()=>
  {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
   
    
      <div className=" flex  w-[750px] mx-auto items-center mt-14 gap-8 p-8 border-b-4 border-slate-700">
        <div >
        <img src={item.image} className=" w-[290px] h-[180px]"/>
      </div>
      
        <div className=" flex flex-col gap-5">
          <h1 className=" font-bold ">{item.title}</h1>
          <h1>{item.description.substring(0,78)}</h1>
          <div className=" flex justify-between items-center" onClick={removefromcart}>
          <p className=" text-green-700 font-bold">${item.price}</p>
         <div className=" w-[30px] h-[30px] bg-red-400 flex justify-center items-center rounded-full " > <FcDeleteDatabase  /></div>
        </div>
       
        </div>
          
      </div>
    

  )
};

export default CartItem;
