import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function Card2() {
  return (
    <div className="flex min-w-60 flex-col gap-4 mx-4 justify-between bg-teal-50 border-teal-600 shadow border 
    p-3 rounded-3xl hover:border  transition-all hover:shadow-xl cursor-pointer">
      <div className="flex gap-4 px-2">
        <img
          src="https://images-platform.99static.com/WFbHcJTGYNOP9fOW8RIu4L_3meQ=/0x0:1700x1700/500x500/top/smart/99designs-contests-attachments/134/134078/attachment_134078518"
          alt=""
          className="w-10 h-10 border rounded-full "
        />
        <div>
          <h1 className="font-bold text-lg">Hack With India</h1>
          <p className="text-neutral-700 flex gap-1 items-center ">
            <IoLocationOutline />
            Online
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-4 mb-3 mx-2">
        <div className="flex items-center gap-3">
          <BsCalendar2Event className="text-[2rem] p-2 bg-white text-slate-700 shadow rounded-xl" />
          <p className="text-slate-700 text-sm">30 Jan 2024</p>
        </div>
        <button className="px-4 py-1 bg-[#00637C] text-white text-sm rounded-lg hover:bg-[#00637cc0] ">
          Details
        </button>
      </div>
    </div>
  );
}

export default Card2;
