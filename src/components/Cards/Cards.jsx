import React from "react";
// import { BsCalendar2Event } from "react-icons/bs";
// import { FaBookmark } from "react-icons/fa";
// import { FaRegBookmark } from "react-icons/fa6";
// import { IoIosPeople, IoMdTime } from "react-icons/io";
// import { IoLocationOutline, IoPeople } from "react-icons/io5";
import { BsCalendar2Event } from "react-icons/bs";
import { IoIosPeople, IoMdTime } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

function Cards({ data }) {
  return (
    <div className=" flex  flex-col w-[99%] transition-all relative p-3 rounded-xl">
      <img
        src={data.logo}
        alt=""
        className="w-22 h-20 border left-10 top-10 absolute rounded-full  "
      />

      <img
        src={data.img}
        alt=""
        className="h-[27rem] p-2 border-l border-r border-t rounded-t-lg "
      />

      <div className="flex  flex-col justify-between bg-white border-r border-l  border-b border-teal-600 p-4 rounded-b-md">
        <div className="flex justify-between p-4 flex-wrap w-full">
          <div className="flex gap-4">
            <IoIosPeople className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
            <div className="">
              <p className="font-medium text-lg">Registered</p>
              <p className="text-primary text-sm">1884</p>
            </div>
          </div>
          <div className="flex gap-4">
            <BsCalendar2Event className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
            <div className="">
              <p className="font-medium text-lg">Date</p>
              <p className="text-primary text-sm">30 Jan 2024</p>
            </div>
          </div>

          <div className="flex gap-4">
            <IoPeople className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300  rounded-xl " />
            <div className="">
              <p className="font-medium text-lg">Team Size</p>
              <p className="text-primary text-sm">1 - 3 Members</p>
            </div>
          </div>
          <div className="flex gap-4">
            <IoMdTime className="text-[2.7rem] sm:p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
            <div className="">
              <p className="font-medium text-lg">Registration Deadline</p>
              <p className="text-primary text-sm">3 days left</p>
            </div>
          </div>
        </div>
        <div>
          <p className="m-4 text-lg ">
            {data.description}
            {data.description}
          </p>
          <div className="flex items-center sm:px-4 w-full flex-row gap-4 justify-between flex-wrap">
            <p className="text-2xl font-semibold text-primary">{data.name}</p>

            <div className="flex gap-5">
              {/* <div className="flex items-center justify-center px-4 gap-4">
                                {data.isSaved ? (
                                    <FaRegBookmark className="text-2xl font-bold text-primary" />
                                ) : (
                                    <FaBookmark className="text-2xl font-bold text-primary" />
                                )}
                            </div> */}
              <p className="text-2xl font-medium text-black">&#8377;999/-</p>

              <button className="px-16 py-2 bg-[#00637C] text-white text-md rounded-lg hover:bg-[#00637cc0] ">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Link
                to={`/event/${data.id}`}
                className="rounded-xl h-[20rem]"
            >
                <img src={data.img} alt="" className="rounded-2xl" />
            </Link>
            <Link to={`/event/${data.id}`}>
                <p className="m-4 text-lg ">{data.description}</p>
            </Link> */}
      {/* 
            <div className="flex justify-between p-3 ">
                <Link to={`/event/${data.id}`}>
                    <div className="flex gap-4">
                        <img src={data.logo} alt="" className="w-14 h-14 border rounded-full" />
                        <div>
                            <h1 className="font-semibold text-xl cursor-pointer">{data.name}</h1>
                            <p className="text-neutral-700 flex gap-2 items-center ">
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

            
           
            <div className="flex  2xl:flex-row">

                <div className="w-full 2xl:w-1/2 p-8 flex flex-wrap gap-x-4 gap-y-2">
                    <div className="flex gap-4">
                        <IoIosPeople className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
                        <div className="">
                            <p className="font-medium text-lg">Registered</p>
                            <p className="text-slate-700 text-sm">1884</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <BsCalendar2Event className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
                        <div className="">
                            <p className="font-medium text-lg">Date</p>
                            <p className="text-slate-700 text-sm">30 Jan 2024</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <IoPeople className="text-[2.7rem] p-2 bg-white text-slate-700 border border-gray-300  rounded-xl " />
                        <div className="">
                            <p className="font-medium text-lg">Team Size</p>
                            <p className="text-slate-700 text-sm">1 - 3 Members</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <IoMdTime className="text-[2.7rem] sm:p-2 bg-white text-slate-700 border border-gray-300 rounded-xl " />
                        <div className="">
                            <p className="font-medium text-lg">Registration Deadline</p>
                            <p className="text-slate-700 text-sm">3 days left</p>
                        </div>
                    </div>
                    <div className="flex items-center sm:px-4 w-full flex-row gap-4 justify-between flex-wrap">
                        <p className="text-2xl font-medium text-black">&#8377;999/-</p>
                        <button className="px-16 py-2 bg-[#00637C] text-white text-md rounded-lg hover:bg-[#00637cc0] ">
                            Register
                        </button>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Cards;
