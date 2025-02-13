import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayouts;
