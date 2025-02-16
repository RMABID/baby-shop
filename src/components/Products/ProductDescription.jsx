import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import des_img from "../../assets/image/product-single-description-image-01.jpg";

const ProductDescription = () => {
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
    <div className="md:flex justify-center p-4">
      <div className="py-8">
        <p className="w-4/5 ">{description}</p>
        <div className="my-8">
          <p>
            <span className="text-lg">Brand: </span>
            {brand}
          </p>
          <p>
            <span className="text-lg">Width: </span>
            {weight}
          </p>
        </div>
      </div>
      <div>
        <img src={des_img} alt="" />
      </div>
    </div>
  );
};

export default ProductDescription;
