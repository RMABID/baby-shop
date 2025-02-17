import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 490.0;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="pt-16">
      <div className="flex px-12 items-center gap-2 py-6 bg-[#F7F3F0]">
        <Link to={"/"}>Home</Link> <IoIosArrowForward />
        <Link to={"/shop"}>Shop</Link>
        <IoIosArrowForward />
        {/* <p>{product_name}</p> */}
      </div>
      <div className="w-10/12 mx-auto py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-xl text-left">
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                {/* Product Info */}
                <td className="flex items-center gap-4 py-4">
                  <button className="btn btn-ghost text-gray-500 hover:text-red-500">
                    <FaTimes />
                  </button>
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="text-lg">Wooden Baby Crib</span>
                </td>

                {/* Price */}
                <td className="py-4 text-gray-700">${price.toFixed(2)}</td>

                {/* Quantity */}
                <td className="py-4">
                  <div className="flex items-center border rounded-lg w-fit">
                    <button
                      onClick={handleDecrease}
                      className="px-3 py-2 border-r hover:bg-gray-200 transition"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={handleIncrease}
                      className="px-3 py-2 border-l hover:bg-gray-200 transition"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </td>

                {/* Subtotal */}
                <td className="py-4 font-semibold">
                  ${(price * quantity).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
