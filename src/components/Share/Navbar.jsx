import { Link, NavLink } from "react-router-dom";
import cart_icon from "../../assets/icon/shopping-cart.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navbar bg-white z-50 shadow-sm fixed w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
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
        <button className="btn flex items-center">
          <img className="w-6" src={cart_icon} alt="" />
          <span className="-mt-5">0</span>
        </button>
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <img
              className="w-10  h-10 object-cover border border-purple-100 p-[2px] rounded-full"
              alt="User"
              src={user?.photoURL}
            />
            <button onClick={logOut} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"} className="btn bg-lime-300">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
