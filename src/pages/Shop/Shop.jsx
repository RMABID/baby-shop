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

  return (
    <div className="pt-16">
      <div className="flex px-12 uppercase items-center gap-2 py-6 bg-amber-100">
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Link>{" "}
        <IoIosArrowForward />{" "}
        <Link
          to={"/shop"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Shop
        </Link>
      </div>
      <div className="w-10/12 my-20 mx-auto md:grid md:grid-cols-12 gap-6 justify-center">
        <div className="col-span-3 md:block hidden">
          <h3 className="text-xl">Category</h3>
          <div className="flex flex-col my-14 items-start">
            {all_products?.map((item, index) => (
              <p key={index} className="m-1">
                {item.category}
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 mb-8">
            <h1 className="text-lg">
              Showing all {all_products.length} results
            </h1>
            <ProductFilter setFilter={setFilter} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
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
