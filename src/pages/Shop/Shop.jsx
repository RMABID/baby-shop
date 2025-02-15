import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ShopCard from "../../components/Share/ShopCard";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: all_products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/all-products");
      return data;
    },
  });

  console.log(all_products);
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
        <div className="col-span-9 grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 ">
          {all_products?.map((item, index) => (
            <ShopCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
