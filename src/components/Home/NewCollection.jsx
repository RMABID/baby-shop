import { Link } from "react-router-dom";
import bear from "../../assets/image/cate doll.png";
import useCard from "../../hooks/useCard";
import LoadingSpinner from "../Share/LoadingSpinner";

const NewCollection = () => {
  const [all_products, , isLoading] = useCard();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">NEW COLLECTION</h2>
        <p className="text-center md:w-3/6 mx-auto my-4 px-4 lg:w-4/12">
          Discover our carefully curated new collection of baby products,
          designed to provide comfort, safety, and style for your little one.
        </p>
      </div>
      <div className="grid md:grid-cols-3 border-[#F7F3F0] justify-center items-center my-12 border-t border-b">
        {all_products?.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="flex flex-col px-10 lg:px-16
       overflow-hidden  group cursor-pointer py-14 w-full items-start gap-4"
          >
            <img
              className="w-full group-hover:rounded-full p-4 aspect-square transition-all bg-[#F7F3F0]  rounded-md"
              src={item?.image}
              alt=""
            />
            <div className="flex relative flex-col items-start leading-4 space-y-2">
              <p className="text-lg uppercase">{item?.brand}</p>
              <h3 className="text-xl font-medium">{item?.product_name}</h3>

              <p className="absolute -translate-y-1  group-hover:translate-y-28 mt-20 duration-500 transition-all text-[#E38443] uppercase">
                $ {item?.price.toFixed(2)}
              </p>
              <p className="absolute translate-y-28  group-hover:-translate-y-1 mt-20 duration-500 transition-all text-[#E38443] uppercase">
                Add to Card
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
