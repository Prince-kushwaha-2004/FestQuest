import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar/SideBar";
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
  const alert = () => {
    toast.error("Hello World");
  };
  return (
    <div className="flex w-screen h-screen bg-[#e8f2fb9f]">
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
