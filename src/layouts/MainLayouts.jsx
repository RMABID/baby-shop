import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayouts;
