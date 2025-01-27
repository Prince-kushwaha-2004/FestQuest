import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router";
import { SideBar } from "../components/Sidebar/Sidebar";
function Dashboard() {
  const alert = () => {
    toast.error("Hello World");
  };
  return (
    <div className="flex w-screen h-screen bg-gradient-to-br from-[#ddeeff] to-[#e6f6d6]">
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
