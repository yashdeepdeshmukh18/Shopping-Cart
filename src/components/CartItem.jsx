import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  }

  return (
    <div>

      <div className="flex flex-row gap-10 justify-between mt-10 border-b-2 border-black pb-5">

        <div>
          <img src={item.image} alt="" className="min-h-[200px] max-w-[200px]"/>
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className=" text-gray-500 font-normal text-[14px]">{item.description}</p>
          <div className="flex justify-between items-center ">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <div className="cursor-pointer text-2xl hover:scale-110 transition duration-200 ease-in"
            onClick={removeFromCart}>
              <FcDeleteDatabase className="bg-gray-400" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CartItem;
