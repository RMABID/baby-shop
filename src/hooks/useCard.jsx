import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCard = () => {
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
  return [all_products, refetch, isLoading];
};

export default useCard;
