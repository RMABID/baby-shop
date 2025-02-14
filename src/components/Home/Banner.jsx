import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider_img1 from "../../assets/image/banner 1.jpg";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black">
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative lg:h-[756px]">
            <img
              className="opacity-70 w-full h-full object-cover"
              src={slider_img1}
              alt="Historical Artifacts"
            />
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 "></div>

            <div className="absolute space-y-4 hidden z-10 text-left top-0 w-full h-full md:flex flex-col justify-center items-center px-32">
              <p className="text-white">WELCOME TO PLAYGROW</p>

              <h1 className="lg:text-5xl text-center font-Garamond md:text-4xl font-medium text-white">
                THE MAGIC PLACE OF <br /> FUN & GAMES
              </h1>

              <Link
                to="/all-artifacts"
                className="p-3 uppercase inline-flex items-center gap-3  hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-white font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0] transition-all duration-300"
              >
                Shop Now
                <span className="text-xl text-white hover:text-red-500 transition-all duration-300">
                  <FaArrowCircleRight />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
