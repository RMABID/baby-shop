import Banner from "../../components/Home/Banner";
import LatestProducts from "../../components/Home/LatestProducts";
import News from "../../components/Home/News";
import Playground from "../../components/Home/Playground";

const Home = () => {
  return (
    <div>
      <Banner />
      <News />
      <LatestProducts />
      <Playground />
    </div>
  );
};

export default Home;
