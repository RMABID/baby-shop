import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider_img1 from "../../assets/image/banner 1.jpg";
import slider_img2 from "../../assets/image/douglas-j-s-moreira-UFdLg0BX5aM-unsplash.jpg";
import slider_img3 from "../../assets/image/gigin-krishnan-5arky4TZZ0Y-unsplash.jpg";
import slider_img4 from "../../assets/image/valeria-zoncoll-AVGc87j_vNA-unsplash.jpg";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const shopBanner = [
    {
      title: "WELCOME TO PLAYGROW",
      name: "THE MAGIC PLACE OF  FUN & GAMES",
      image: slider_img1,
    },
    {
      title: "WELCOME TO PLAYGROW",
      name: "THE MAGIC PLACE OF  FUN & GAMES",
      image: slider_img2,
    },
    {
      title: "WELCOME TO PLAYGROW",
      name: "FIND EVERYTHING FOR YOUR BABY",
      image: slider_img3,
    },
    {
      title: "WELCOME TO PLAYGROW",
      name: "THE MAGIC PLACE OF  FUN & GAMES",
      image: slider_img4,
    },
  ];

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
        {shopBanner.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[846px] flex flex-col items-center justify-center">
              <img
                className="opacity-70 w-full h-full object-cover"
                src={item?.image}
                alt="Historical Artifacts"
              />
              {/* Semi-transparent black overlay */}
              <div className="absolute inset-0 "></div>

              <div className="absolute space-y-4 z-10 text-left  bottom-80 md:flex flex-col justify-center items-center md:px-32 px-4">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-white text-center"
                >
                  {item?.title}
                </motion.p>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="lg:text-5xl text-3xl my-6 md:w-4/5 mx-auto text-center font-Garamond md:text-4xl font-medium text-white"
                >
                  {item?.name}
                </motion.h1>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center w-full justify-center cursor-pointer hover:scale-110 duration-500 transition-all mt-4"
                >
                  <Link
                    to="/all-artifacts"
                    className="p-3 group uppercase inline-flex items-center gap-3  hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-white   rounded-full px-12 bg-[#E38443] hover:bg-[#F4F3F0] transition-all duration-300"
                  >
                    Shop Now
                    <span className="text-xl text-white group-hover:text-red-500 transition-all duration-300">
                      <FaArrowCircleRight />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
