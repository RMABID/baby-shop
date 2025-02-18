import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useOrder from "../../../hooks/useOrder";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyOrder = () => {
  const axiosPublic = useAxiosPublic();
  const [order, refetch] = useOrder();
  // const [quantity, setQuantity] = useState(1);
  // const price = 490.0;

  // const handleIncrease = () => setQuantity((prev) => prev + 1);
  // const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = order.reduce(
    (total, item) => total + item?.total_price,
    0
  );

  const handelDeleteOrder = async (id) => {
    try {
      await axiosPublic.delete(`/order-product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-16">
      <div className="flex px-12 uppercase items-center gap-2 py-6 bg-[#F7F3F0]">
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Link>{" "}
        <IoIosArrowForward />
        <Link
          to={"/shop"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Shop
        </Link>
        <IoIosArrowForward />
        <p>Cart</p>
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
            {order?.map((item, index) => (
              <tbody key={index}>
                <tr className="border-b">
                  {/* Product Info */}
                  <td className="flex items-center gap-4 py-4">
                    <button
                      onClick={() => handelDeleteOrder(item?._id)}
                      className="btn btn-ghost text-gray-500 hover:text-red-500"
                    >
                      <FaTimes />
                    </button>
                    <Link to={`/shop/${item?.product_order_id}`}>
                      <img
                        src={item?.product_image}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </Link>
                    <Link to={`/shop/${item?.product_order_id}`}>
                      <span className="text-lg">{item?.product_name}</span>
                    </Link>
                  </td>

                  {/* Price */}
                  <td className="py-4 text-gray-700">
                    ${item?.price.toFixed(2)}
                  </td>

                  {/* Quantity */}
                  {/* <td className="py-4">
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
                  </td> */}
                  <td className="">{item?.total_quantity}</td>

                  {/* Subtotal */}
                  <td className="py-4 font-semibold">
                    ${(item?.total_price).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="my-12">
          <h1 className="text-3xl font-medium">Cart Totals</h1>
          <div className="flex items-center gap-x-52 border-b w-96 justify-between p-2 my-6">
            <p className="text-2xl">Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="flex items-center gap-x-52 border-b w-96 justify-between p-2 my-6">
            <p className="text-2xl">Total</p>
            <p>$ {totalPrice}</p>
          </div>
          <button className="btn bg-[#DB915E] uppercase text-white py-7">
            product to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
