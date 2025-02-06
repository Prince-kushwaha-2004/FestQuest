import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, index }) {
  const boxColor = ["#B393D5", "#E9FF4F", "#B0F5E2", "#FFD78E"];

  var colorNumber = (colorNumber = index % boxColor.length);

  return (
    <div
      className={`flex bg-[${boxColor[colorNumber]}] px-4 w-170 flex-col border border-gray-300  transition-all   py-4 rounded-xl`}
    >
      <div>
        <div className="flex justify-between ">
          <div className="text-2xl flex items-center gap-4 font-normal">
            <img src={data.logo} alt="" className="w-15 h-15  rounded-full  " />
            <div>
              <div> {data.name} </div>
              <div className="text-sm py-1 font-light text-gray-800">
                {data.organiser}
              </div>

              <div className="flex gap-4 ">
                <div className="text-sm font-light text-teal-800">
                  {data.eventType}
                </div>
                <div className="text-sm font-light ">{data.mode}</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Link to={`/event/${data.id}`}>
        <img
          src={data.img}
          alt=""
          className="h-75 w-170 p-2 mt-1 rounded-2xl  "
        />
      </Link>

      <div className="flex justify-between px-3 py-2 flex-col md:flex-row">
        <div>
          <p className="font-medium text-lg"> Deadline</p>
          <p className="text-teal-900 text-sm">{data.daysLeft} days left</p>
        </div>
        <div>
          <p className="font-medium text-lg">Registered</p>
          <p className="text-teal-900 text-sm">{data.registered}</p>
        </div>
        <div>
          <p className="font-medium text-lg">Date</p>
          <p className="text-teal-900 text-sm">30 Jan 2024</p>
        </div>
      </div>

      <div className="flex justify-between mt-2 py-1 gap-3 px-3">
        <p className="text-xl font-medium text-black">&#8377;999/-</p>

        <button className="px-8 py-2 bg-black text-white text-md rounded-lg hover:bg-[#00637cc0] ">
          Register
        </button>
      </div>
    </div>
  );
}

export default Cards;
