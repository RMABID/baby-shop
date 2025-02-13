import Marquee from "react-fast-marquee";
import star from "../../assets/icon/star.png";
import love from "../../assets/icon/heart.png";

const News = () => {
  return (
    <div className="my-4 border-b py-10 border-t">
      <Marquee>
        <div className="flex items-center justify-between gap-12">
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> BEAUTIFUL DESIGN </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> HIGH QUALITY </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> NEW PRODUCTS </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> EASY TO ASEMBLE </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> BEAUTIFUL DESIGN </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> HIGH QUALITY </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> NEW PRODUCTS </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> EASY TO ASEMBLE </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> BEAUTIFUL DESIGN </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> HIGH QUALITY </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={star} alt="" />
            <h4 className="text-lg font-medium"> NEW PRODUCTS </h4>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8" src={love} alt="" />
            <h4 className="text-lg font-medium"> EASY TO ASEMBLE </h4>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default News;
