import { GrLogout } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/cate doll.png";
import useAuth from "../../hooks/useAuth";

const SmallNavbar = ({ isActive, setActive }) => {
  const { logOut } = useAuth();
  return (
    <div>
      <div
        className={`z-50 lg:hidden fixed flex flex-col justify-between overflow-hidden bg-[#F7F3F0]  w-72 shadow space-y-6 px-2 py-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } lg:translate-x-0 transition duration-500 ease-in-out`}
      >
        <div>
          <div className="w-full  z-50 md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#FEF3C6] mx-auto">
            <Link to="/">
              <img src={logo} alt="logo" width="100" height="100" />
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <ul className="flex flex-col text-black items-start px-6  text-lg   gap-4">
                <li
                  onClick={() => setActive(true)}
                  className="cursor-pointer w-40  p-2 rounded-sm hover:bg-[#E38443] hover:text-white hover:text-center duration-500 transition-all"
                >
                  <NavLink
                    to={"/"}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={() => setActive(true)}
                  className="cursor-pointer w-40  p-2 rounded-sm hover:bg-[#E38443] hover:text-white hover:text-center duration-500 transition-all"
                >
                  <NavLink
                    to={"/shop"}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li
                  onClick={() => setActive(true)}
                  className="cursor-pointer w-40  p-2 rounded-sm hover:bg-[#E38443] hover:text-white hover:text-center duration-500 transition-all"
                >
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <hr />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white bg-[#E38443]  hover:bg-[#91C6BE] rounded-full hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;
