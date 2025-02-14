import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const AllProductsTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [latests, setLatests] = useState(false);
  const { category, brand, image, owner_email, product_name, _id } = item;

  console.log(image[0]);
  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/product/${id}`);
      toast.success("Delete Success");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  //Latest Products Add
  const handleAddLatestProduct = async (id) => {
    try {
      await axiosSecure.patch(`/all-products/${id}`, { latests });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className="">
      <td>
        <img className="w-16 h-12 " src={image[0]} alt="" />
      </td>
      <td>{product_name}</td>
      <td>{category}</td>
      <td>{brand}</td>
      <td>{owner_email}</td>

      <th>
        <div className="flex items-center justify-center">
          <Link
            to={`/dashboard/all-product/${_id}`}
            className="btn text-lg btn-ghost hover:bg-lime-400 "
          >
            <FiEdit />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-red-500 hover:bg-red-500 hover:text-white text-lg btn-ghost "
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default AllProductsTable;
