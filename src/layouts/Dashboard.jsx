import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section className="md:flex min-h-screen bg-white/20 relative">
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </section>
  );
};

export default Dashboard;
