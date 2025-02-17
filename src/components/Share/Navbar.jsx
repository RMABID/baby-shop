import { Link, NavLink } from "react-router-dom";
import cart_icon from "../../assets/icon/shopping-cart.png";
import useAuth from "../../hooks/useAuth";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ handleToggle, isActive }) => {
  const { user, logOut } = useAuth();

  return (
    <div className="navbar bg-white z-50 shadow-sm fixed w-full">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Baby Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <button className="btn flex items-center">
              <img className="w-6" src={cart_icon} alt="" />
              <span className="-mt-5">0</span>
            </button>
            <img
              className="w-10  h-10 object-cover border border-purple-100 p-[2px] rounded-full"
              alt="User"
              src={user?.photoURL}
            />
          </div>
        ) : (
          <Link to={"/login"} className="btn bg-lime-300">
            Login
          </Link>
        )}
        <button
          onClick={handleToggle}
          className="px-3 py-2 focus:outline-none lg:hidden focus:bg-gray-200"
        >
          {isActive ? (
            <CiMenuBurger className=" text-xl" />
          ) : (
            <RxCross1 className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
