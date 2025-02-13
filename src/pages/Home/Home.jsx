import Banner from "../../components/Home/Banner";
import LatestProducts from "../../components/Home/LatestProducts";
import News from "../../components/Home/News";

const Home = () => {
  return (
    <div>
      <Banner />
      <News />
      <LatestProducts />
      {/* <Banner /> */}
    </div>
  );
};

export default Home;
