import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useOrder = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  //tanstack query
  const { data: order = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-order/${user?.email}`);
      return res.data;
    },
  });

  return [order, refetch];
};

export default useOrder;
