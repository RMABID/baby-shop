
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
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute hidden z-10 text-left top-0 w-full h-full md:flex flex-col justify-center items-start px-32">
              <h1 className="lg:text-6xl  font-Garamond md:text-5xl font-bold text-white">
                Historical Artifacts
                <br />
                <span className="text-[#f2b872] font-agu font-light"></span>
              </h1>

              <p className="text-lg my-4 lg:w-4/6 font-Garamond text-gray-200 font-medium opacity-90">
                A Historical Artifacts Tracker is a digital system designed to
                manage and monitor artifacts, providing detailed records and
                insights into their history, location, condition, and
                provenance.
              </p>

              <Link
                to="/all-artifacts"
                className="p-3 inline-flex items-center gap-3 hover:bg-transparent hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-white font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0] transition-all duration-300"
              >
                See All Artifacts
                <span className="text-xl text-white hover:text-red-500 transition-all duration-300">
                  <FaArrowCircleRight />
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative lg:h-[756px]">
            <img
              className="opacity-70 w-full h-full object-cover"
              src={slider_img1}
              alt="Historical Artifacts"
            />
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute hidden z-10 text-left top-0 w-full h-full md:flex flex-col justify-center items-start px-32">
              <h1 className="lg:text-6xl  font-Garamond md:text-5xl font-bold text-white">
                Historical Artifacts
                <br />
                <span className="text-[#f2b872] font-agu font-light"></span>
              </h1>

              <p className="text-lg my-4 lg:w-4/6 font-Garamond text-gray-200 font-medium opacity-90">
                A Historical Artifacts Tracker is a digital system designed to
                manage and monitor artifacts, providing detailed records and
                insights into their history, location, condition, and
                provenance.
              </p>

              <Link
                to="/all-artifacts"
                className="p-3 inline-flex items-center gap-3 hover:bg-transparent hover:border-2 border-red-600 hover:text-red-600 text-lg font-semibold text-white font-agu rounded-full px-12 bg-[#a86104] hover:bg-[#F4F3F0] transition-all duration-300"
              >
                See All Artifacts
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
