import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";
import { useState } from "react";
import SmallNavbar from "../components/Share/SmallNavbar";

const MainLayouts = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <Navbar handleToggle={handleToggle} isActive={isActive} />
      <SmallNavbar isActive={isActive} setActive={setActive} />
      <section className="min-h-[calc(100vh-104px)]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayouts;
