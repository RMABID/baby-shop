import { useQuery } from "@tanstack/react-query";
import { IoIosArrowForward } from "react-icons/io";
import { data, Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Details = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [images, setImage] = useState("");

  const { data: product = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/product/${id}`);
      setImage(data.image[0]);
      return data;
    },
  });
  const {
    product_name,
    category,
    brand,
    price,
    weight,
    owner_email,
    owner_name,
    description,
    image,
  } = product;

  return (
    <div className="pt-16">
      <div className="flex px-12 items-center gap-2 py-6 bg-[#F7F3F0]">
        <Link to={"/"}>Home</Link> <IoIosArrowForward />
        <Link to={"/shop"}>Shop</Link>
        <IoIosArrowForward />
        <p>{product_name}</p>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex gap-12 sm:gap-12 flex-col  sm:flex-row my-16">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between items-center sm:justify-normal sm:w-[18.7%] w-full">
              {product?.image?.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  key={index}
                  src={item}
                  alt=""
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={images} alt="" />
            </div>
          </div>

          {/* products info */}
          <div className="flex-1">
            <h1 className="font-medium md:text-4xl text-2xl  mt-2">
              {product_name}
            </h1>
            {/* <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div> */}
            <p className="mt-5 text-3xl font-medium">${price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{description}</p>
            <div className="flex flex-col gap-4 my-8">
            
              <button className="bg-black mt-5 w-60 text-white px-8 py-3 text-sm active:bg-gray-700">
                Add to Cart
              </button>
              <hr className="mt-4 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
