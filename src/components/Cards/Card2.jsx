import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Card2({ data }) {
  return (
    <Link to={`event/${data.id}`}>
      <div className="flex min-w-60 flex-col gap-4 mx-4 justify-between bg-[#2847270e] shadow border border-slate-300 p-2 rounded-3xl hover:border  transition-all hover:shadow-xl cursor-pointer">
        <div className="flex gap-4">
          <img
            src={data.logo}
            alt="img"
            className="w-10 h-10 rounded-full "
          />
          <div>
            <h1 className="font-bold text-lg">{data.name}</h1>
            <p className="text-neutral-700 flex gap-1 items-center ">
              <IoLocationOutline />
              {data.mode}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 mb-3 mx-2">
          <div className="flex items-center gap-3">
            <BsCalendar2Event className="text-[2rem] p-2 bg-white text-slate-700 shadow rounded-xl" />
            <p className="text-slate-700 text-sm">{data.date}</p>
          </div>
          <button className="px-4 py-1 bg-[#00637C] text-white text-sm rounded-lg hover:bg-[#00637cc0] ">
            Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card2;
