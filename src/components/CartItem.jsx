// import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

// Function to truncate a string to a certain number of words
const truncateWords = (str, numWords) => {
  const words = str.split(' ');
  if (words.length > numWords) {
    return words.slice(0, numWords).join(' ') + '...';
  }
  return str;
};

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  const truncatedDescription = truncateWords(item.description, 30);

  return (
    // <div className="border p-4 mb-4 grid grid-cols-3 gap-4">
    <div className="flex flex-col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full " alt={item.title} />
      </div>
      <div className="col-span-2">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <p className="text-gray-600">{truncatedDescription}</p>
        <div className="flex justify-between  items-center w-full mt-5">
          <p className="text-green-600 font-semibold"> ${item.price}</p>
          {/* <div
            className="cursor-pointer ml-4 text-red-500"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase size={20} />
          </div> */}
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

