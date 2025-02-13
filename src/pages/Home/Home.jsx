import Banner from "../../components/Home/Banner";
import LatestProducts from "../../components/Home/LatestProducts";
import NewCollection from "../../components/Home/NewCollection";
import News from "../../components/Home/News";
import OfferNews from "../../components/Home/OfferNews";
import Playground from "../../components/Home/Playground";

const Home = () => {
  return (
    <div>
      <Banner />
      <News />
      <LatestProducts />
      <Playground />
      <OfferNews />
      <NewCollection />
    </div>
  );
};

export default Home;
