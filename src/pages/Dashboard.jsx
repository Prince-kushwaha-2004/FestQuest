import React from "react";
import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar/SideBar";
function Dashboard() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
