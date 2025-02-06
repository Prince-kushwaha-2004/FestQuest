import React from "react";
// import { BsCalendar2Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Color } from "../../utils/Color";

function Card2({ data, index }) {
  const boxColor = Color.arrayColor;

  var colorNumber = index;
  colorNumber = index % boxColor.length;

  return (
    <Link
      to={`/event/${data.id}`}
      className="flex flex-col lg:w-full w-90 gap-2 justify-between   
           p-4 rounded-xl transition-all  cursor-pointer"
      style={{ backgroundColor: `${boxColor[colorNumber]}` }}
    >
      <div className="flex justify-between flex-col md:flex-row ">
        <img src={data.logo} alt="img" className=" w-17 h-15 rounded-2xl" />
        <div className="text-lg font-normal py-2 md:py-0 text-gray-800">
          {data.date}
        </div>
      </div>
      <div className="font-medium font-serif text-2xl">{data.name}</div>
      {/* <div className="flex flex-row">
        <IoLocationOutline />
        {data.mode}
      </div> */}

      <p className="flex justify-between gap-3 items-center ">
        <div className="gap-2 flex items-center">{data.organiser}</div>
        <BsArrowUpRightCircle className="text-2xl" />
      </p>
    </Link>
  );
}

export default Card2;
