import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosPeople, IoMdTime } from "react-icons/io";
import { IoLocationOutline, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <div className="bg-[#2847270e] hover:shadow-xl transition-all border border-slate-300 w-full  p-4 rounded-4xl">
      <div className="flex justify-between">
        <Link to={`/event/${data.id}`}>
          <div className="flex gap-4">
            <img src={data.logo} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="font-bold text-2xl cursor-pointer">{data.name}</h1>
              <p className="text-neutral-700 flex gap-1 items-center ">
                <IoLocationOutline />
                {data.mode}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center px-4 gap-4">
          {data.isSaved ? (
            <FaRegBookmark className="text-2xl font-bold text-primary" />
          ) : (
            <FaBookmark className="text-2xl font-bold text-primary" />
          )}
        </div>
      </div>
      <Link to={`/event/${data.id}`}>
        <p className="m-4 ">{data.description}</p>
      </Link>
      <div className="flex flex-col 2xl:flex-row">
        <Link
          to={`/event/${data.id}`}
          className="rounded-2xl w-full 2xl:w-1/2  2xl:m-4"
        >
          <img src={data.img} alt="" className="rounded-2xl" />
        </Link>
        <div className="w-full 2xl:w-1/2 p-8 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            to={`/event/${data.id}`}
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            <div className="flex gap-4">
              <IoIosPeople className="text-[2.7rem] p-2 bg-white text-slate-700 shadow-xl rounded-xl " />
              <div className="">
                <p className="font-semibold text-lg">Registered</p>
                <p className="text-slate-700 text-sm">{data.registered}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BsCalendar2Event className="text-[2.7rem] p-2 bg-white text-slate-700 shadow-xl rounded-xl " />
              <div className="">
                <p className="font-semibold text-lg">Date</p>
                <p className="text-slate-700 text-sm">{data.date}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <IoPeople className="text-[2.7rem] p-2 bg-white text-slate-700 shadow-xl rounded-xl " />
              <div className="">
                <p className="font-semibold text-lg">Team Size</p>
                <p className="text-slate-700 text-sm">
                  1 - {data.teamSize} Members
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <IoMdTime className="text-[2.7rem] sm:p-2 bg-white text-slate-700 shadow-xl rounded-xl " />
              <div className="">
                <p className="font-semibold text-lg">Registration Deadline</p>
                <p className="text-slate-700 text-sm">
                  {data.daysLeft} days left
                </p>
              </div>
            </div>
          </Link>
          <div className="flex items-center sm:px-4 w-full flex-row gap-4 justify-between flex-wrap">
            <p className="text-2xl font-semibold text-black">
              &#8377;{data.price}
            </p>
            <button className="px-16 py-2 bg-[#00637C] text-white text-md rounded-lg hover:bg-[#00637cc0] ">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
