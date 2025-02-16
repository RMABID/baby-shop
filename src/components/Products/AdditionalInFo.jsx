import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const AdditionalInFo = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/product/${id}`);
      return data;
    },
  });

  const { product_name, category, brand, price, weight, description, image } =
    product;
  return (
    <div className="md:grid grid-cols-2 gap-16 space-y-6 py-8 px-4 md:space-y-0 items-center justify-center">
      <p className="flex items-center justify-between border-b p-2 border-[#e7a16b]">
        <span className="font-medium text-lg">Weight</span>
        {weight} kg
      </p>

      <p className="flex items-center justify-between border-b p-2 border-[#e7a16b]">
        <span className="font-medium text-lg">Bran</span>
        {brand}
      </p>
      <p className="flex items-center justify-between border-b p-2 border-[#e7a16b]">
        <span className="font-medium text-lg">Category</span>
        {category}
      </p>
      <p className="flex items-center justify-between border-b p-2 border-[#e7a16b]">
        <span className="font-medium text-lg">Price</span>
        {price}
      </p>
    </div>
  );
};

export default AdditionalInFo;
