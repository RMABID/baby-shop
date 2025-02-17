import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ShopCard from "../Share/ShopCard";

const RelatedProducts = ({ category }) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: all_products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-products`);
      return data;
    },
  });
  return (
    <div className="my-14">
      <h1 className="text-3xl text-center font-medium">Related products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-14">
        {all_products
          ?.filter((item) => item.category === category)
          ?.map((item, index) => (
            <ShopCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
