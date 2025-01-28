import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router";
import { SideBar } from "../components/SideBar/SideBar";
function Dashboard() {
  const alert = () => {
    toast.error("Hello World");
  };
  return (
    <div className="flex w-screen h-screen bg-gradient-to-br from-[#cfe4fa] to-[#ebf9dccf]">
      <SideBar />
      <Outlet />
    </div>
  );
}
export default Dashboard;
