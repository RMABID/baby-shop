import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ShopCard from "../../components/Share/ShopCard";
import ProductFilter from "../../components/Filter/ProductFilter";
import { useState } from "react";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState(null);
  const {
    data: all_products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-products", filter],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-products?sort=${filter}`);
      return data;
    },
  });
  console.log(filter);
  return (
    <div className="pt-16">
      <div className="flex px-12 items-center gap-2 py-6 bg-amber-100">
        <Link to={"/"}>Home</Link> <IoIosArrowForward />{" "}
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div className="w-10/12 my-20 mx-auto grid grid-cols-12 gap-6 justify-center">
        <div className="col-span-3">
          <h3 className="text-xl">Category</h3>
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-lg">Showing all 7 results</h1>
            <ProductFilter setFilter={setFilter} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {all_products?.map((item, index) => (
              <ShopCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
