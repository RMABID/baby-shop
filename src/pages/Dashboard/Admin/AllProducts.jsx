import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllProductsTable from "../../../components/Table/AllProductsTable";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-products");
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table border border-lime-500">
        {/* head */}
        <thead className="h-16 bg-lime-300 text-[15px] text-center">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Email</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {products?.map((item, index) => (
            <AllProductsTable
              axiosSecure={axiosSecure}
              refetch={refetch}
              key={index}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
