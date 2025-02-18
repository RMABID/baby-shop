
import useCard from "../../hooks/useCard";
import LoadingSpinner from "../Share/LoadingSpinner";

const LatestProducts = () => {
  const [all_products, , isLoading] = useCard();
  if (isLoading) return <LoadingSpinner />;
  console.log(all_products);
  return (
    <div className="grid md:grid-cols-3 border-[#F7F3F0] justify-center items-center my-12 border-t border-b">
      {all_products?.slice(0, 3).map((item, index) => (
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
  );
};

export default LatestProducts;
