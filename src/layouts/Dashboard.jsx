import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section className="md:flex min-h-screen bg-white/20 relative">
      <div>
        <Sidebar />
      </div>
      <section className="flex-1 md:ml-64">
        <Outlet />
      </section>
    </section>
  );
};

export default Dashboard;
