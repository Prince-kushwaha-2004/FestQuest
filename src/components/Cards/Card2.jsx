import React from "react";
// import { BsCalendar2Event } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Color } from "../../utils/Color";


function Card2({ data, index }) {

  const boxColor = Color.arrayColor

  var colorNumber = index
  if (index + 1 > boxColor.length) {
    colorNumber = index % boxColor.length
  }


  return (
    <div
      className={` flex flex-col w-full h-[20rem] gap-4  justify-between   
        border p-4 rounded-xl   hover:border  transition-all  cursor-pointer`}
      style={{ backgroundColor: boxColor[colorNumber] }}
    >
      <img src={data.logo} alt="img" className=" w-17 h-15 rounded-2xl" />

      <h1 className="font-medium  text-2xl">{data.name}</h1>

      <p className=" flex justify-between items-center ">
        <div className="gap-2 flex items-center">
          <IoLocationOutline />
          {data.mode}
          <p>
            {data.date}

          </p>
        </div>


        <BsArrowUpRightCircle className="text-2xl" />
      </p>






    </div>

  );
}

export default Card2
