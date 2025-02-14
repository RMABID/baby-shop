import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Shop from "../pages/Shop/Shop";
import Dashboard from "../layouts/Dashboard";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import Users from "../pages/Dashboard/Users";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <AddProduct />,
      },
      {
        path: "all-product",
        element: <AllProducts />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
export default Routes;
