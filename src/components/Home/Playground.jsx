import { IoIosArrowForward } from "react-icons/io";
import bg_image from "../../assets/image/Header_v4_2048x2048.webp";

const Playground = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bg_image}')` }}
      className="h-[45rem] relative  bg-center bg-cover bg-no-repeat my-8 md:flex justify-center "
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      <div className="flex absolute z-10 text-left top-0 w-full h-full flex-col justify-center pt-22 items-center space-y-6">
        <p className="text-lg font-medium text-white">WELCOME TO PLAYGROW</p>
        <h1 className="md:text-5xl text-3xl text-white font-medium ">
          YOUR DREAM BABY SHOP
        </h1>
        <div className="flex items-center gap-3">
          <button className="btn relative group uppercase duration-500 transition-all  text-white font-medium bg-[#E38443] hover:translate-x-1 overflow-hidden hover:px-8 py-6 border-none">
            <span className="text-white  group-hover:-translate-x-6 duration-500 transition-all">
              Shop Now
            </span>
            <span className="absolute translate-x-40 group-hover:translate-x-10 text-lg duration-500 transition-all">
              <IoIosArrowForward />
            </span>
          </button>
          <button className="btn relative group uppercase duration-500 transition-all  text-white font-medium bg-[#91C6BE] hover:translate-x-1 overflow-hidden hover:px-8 py-6 border-none">
            <span className="text-white  group-hover:-translate-x-6 duration-500 transition-all">
              Shop Now
            </span>
            <span className="absolute translate-x-40 group-hover:translate-x-10 text-lg duration-500 transition-all">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
