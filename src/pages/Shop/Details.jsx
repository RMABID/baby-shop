import { useQuery } from "@tanstack/react-query";
import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import ProductInFo from "../../components/Products/ProductInFo";
import RelatedProducts from "../../components/Products/RelatedProducts";

const Details = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [images, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/product/${id}`);
      return data;
    },
  });

  useEffect(() => {
    if (product?.image) {
      setImage(product.image[0]);
    }
  }, [product]);

  if (isLoading) return <p>Loading product details...</p>;

  if (!product) return <p>Product not found.</p>;

  const {
    product_name,
    category,
    brand,
    price,
    weight,
    description,
    image,
    quantity: previousQuantity, // Fix variable name for clarity
  } = product;

  // Correct stock calculation
  const currentQuantity = previousQuantity - quantity;

  const increaseQuantity = () => {
    if (quantity < previousQuantity) {
      setQuantity((prev) => prev + 1);
    } else {
      alert("Not enough stock available!");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      alert("Quantity cannot be less than 1");
    }
  };

  return (
    <div className="pt-16">
      <div className="flex px-12 items-center gap-2 py-6 bg-[#F7F3F0]">
        <Link to={"/"}>Home</Link> <IoIosArrowForward />
        <Link to={"/shop"}>Shop</Link>
        <IoIosArrowForward />
        <p>{product_name}</p>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row my-16">
          {/* Product Image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between items-center sm:justify-normal sm:w-[18.7%] w-full">
              {product?.image?.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-1 h-18 rounded-xl border-[#f5b489]"
                  key={index}
                  src={item}
                  alt=""
                />
              ))}
            </div>
            <div className="w-full  sm:w-[80%] border-[0.1px] border-[#f5b489] rounded-xl">
              <img className="w-full h-auto" src={images} alt="Product Image" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="font-medium md:text-4xl text-2xl mt-2">
              {product_name}
            </h1>
            <p className="mt-5 text-3xl font-medium">${price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{description}</p>
            <p className="mt-5">
              <span className="text-xl font-medium">Stock Available:</span>{" "}
              {currentQuantity}
            </p>
            <div className="flex flex-col gap-4 my-4">
              <div className="flex items-center space-x-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-400 rounded-md">
                  <button
                    className="px-3 py-1 border-r border-gray-400 hover:bg-gray-200"
                    onClick={decreaseQuantity}
                  >
                    −
                  </button>
                  <span className="px-4 py-1 text-lg font-semibold">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-1 border-l border-gray-400 hover:bg-gray-200"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-[#E38443] cursor-pointer hover:bg-[#E38340] text-white px-5 py-2 rounded-md font-semibold">
                  ADD TO CART
                </button>
              </div>
              <hr className="mt-4 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-14">
          <ProductInFo id={id} />
          <section className="border border-[#f7b787] rounded-md p-4 my-4 ">
            <Outlet />
          </section>
          <RelatedProducts category={category} />
        </div>
      </div>
    </div>
  );
};

export default Details;
