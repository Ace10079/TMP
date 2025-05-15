import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Pages/Sidebar";
import Header from "./Pages/Header";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <Outlet />  {/* This will render the active page inside Dashboard */}
      </div>
    </div>
  );
}

export default Dashboard;
