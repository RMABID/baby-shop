import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiper.css";
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";
import slider_imag from "../../assets/image/cate doll.png";
import slider_imag2 from "../../assets/image/banner 1.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OfferNews = () => {
  return (
    <div className="md:flex gap-12 border-[#F7F3F0] justify-center items-center my-12 border-t border-b ">
      <div className="flex-1 px-6 border-x border-[#e6baa5] bg-[#FCFAF9] py-14">
        <Swiper
          spaceBetween={5}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCards]}
          effect={"cards"}
          grabCursor={true}
          className="mySwiper w-[440px] h-[520px] p-2"
        >
          <SwiperSlide>
            <div>
              <img
                className="w-full h-[550px]  object-cover"
                src={slider_imag}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-full h-[550px]  object-cover"
                src={slider_imag2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-full h-[550px]  object-cover"
                src={slider_imag2}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="flex-1 justify-center py-14 items-center flex flex-col
      "
      >
        <h1 className="text-3xl font-medium my-10">RECENT NEWS</h1>
        <div className="flex flex-col items-start space-y-8">
          <Link>
            <p className="uppercase">Special</p>
            <h3 className="text-2xl">The Wave Crib in Natural Wood</h3>
          </Link>
          <Link>
            <p className="uppercase">wooden toys</p>
            <h3 className="text-2xl">Deep Sea Party Wooden Toys</h3>
          </Link>
          <Link>
            <p className="uppercase">Special</p>
            <h3 className="text-2xl">
              Montessori Interactive Toy for 2 Year Old
            </h3>
          </Link>
          <Link>
            <p className="uppercase">BEDS</p>
            <h3 className="text-2xl">BPA Free Silicone Baby Feeding Set</h3>
          </Link>
          <Link>
            <p className="uppercase">Special</p>
            <h3 className="text-2xl">The Wave Crib in Natural Wood</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferNews;
