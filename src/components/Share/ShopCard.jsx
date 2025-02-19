import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { brand, product_name, price, image, _id } = item;
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      to={`/shop/${_id}`}
      id="top"
      className="flex flex-col overflow-hidden group gap-3 items-center justify-center border p-2 rounded-xl"
    >
      <div>
        <img className="w-60 max-h-60 mx-auto" src={image} alt="" />
      </div>
      <div className="flex flex-col relative  h-40 justify-center text-center items-center space-y-3">
        <p>{brand}</p>
        <h2 className="lg:text-2xl md:text-xl text-black">{product_name}</h2>
        <p className="absolute  uppercase bottom-0 duration-500 transition-all group-hover:-bottom-full ">
          $ {price}
        </p>
        <p className="text-lg absolute text-[#E38443] uppercase -bottom-full duration-500 transition-all group-hover:bottom-0 ">
          Add to Cart
        </p>
      </div>
    </Link>
  );
};

export default ShopCard;
