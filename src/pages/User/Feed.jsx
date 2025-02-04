import { Dropdown, Space } from "antd";
import { motion } from "framer-motion";
import { React, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Card2 from "../../components/Cards/Card2";
import Cards from "../../components/Cards/Cards";
import data from "../../utils/data.json";
function Feed() {
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs whitespace-nowrap rounded-md hover:border hover:bg-[#deeff57e] border-slate-300 transition-all text-slate-700 cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };

  const items = [
    {
      key: "1",
      label: <Link to="/register">Edit Profile</Link>,
    },
    {
      key: "2",
      label: <Link to="/login">Logout</Link>,
    },
  ];

  const [open, setOpen] = useState(false);

  const LocationSelect = () => {
    const [selected, setSelected] = useState("All Locations");

    const [open, setOpen] = useState(false);

    const locations = ["All Locations", "Delhi", "Noida", "Bangalore"];

    return (
      <div className="relative">
        <motion.div animate={open ? "open" : "closed"}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="w-full min-w-[200px] flex items-center justify-between px-4 py-2.5 
                     bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl
                     hover:bg-white/80 hover:shadow-md transition-all duration-300"
          >
            <span className="text-gray-700">{selected}</span>
            <motion.span variants={iconVariants}>
              <MdOutlineKeyboardArrowDown className="text-gray-500 text-xl" />
            </motion.span>
          </button>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            animate={open ? "open" : "closed"}
            style={{ originY: "top" }}
            className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg 
                     border border-gray-200 overflow-hidden"
          >
            {locations.map((location) => (
              <li
                key={location}
                onClick={() => {
                  setSelected(location);
                  setOpen(false);
                }}
                className="px-4 py-2.5 hover:bg-[#deeff57e] cursor-pointer 
                         transition-colors duration-200"
              >
                {location}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <div className=" flex-1 overflow-scroll p-8 no-scrollbar ms-24 xl:ms-0">
        <div className="flex items-center justify-between lg:hidden">
          <h1 className="text-3xl font-bold text-neutral-800 ">Suggestions</h1>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
              >
                <div className=" flex items-center justify-between py-2 px-4 rounded-2xl m-2 transition-all ">
                  <div className="flex items-center gap-1">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                      className="w-12 h-12 border rounded-full"
                      alt=""
                    />

                    <MdOutlineKeyboardArrowDown className="text-3xl" />
                  </div>
                </div>
              </Dropdown>
            </Space>
          </Space>
        </div>

        <div className="flex gap-4 overflow-scroll no-scrollbar mb-10 lg:hidden">
          {data.map((value) => {
            return <Card2 key={value.id} data={value} />;
          })}
        </div>
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-neutral-800">Events</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/50 backdrop-blur-sm 
                         border border-gray-200 rounded-xl focus:outline-none 
                         focus:ring-2 focus:ring-blue-50 focus:border-transparent
                         transition-all duration-300 hover:bg-white/80 hover:shadow-md"
              />
            </div>

            <LocationSelect className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {data.map((value) => {
            return <Cards key={value.id} data={value} />;
          })}
        </div>
      </div>

      <div className="w-[25rem] shadow bg-[#2847270e]  border-l border-slate-300 hidden lg:flex flex-col">
        <div className="flex items-center justify-center">
          <motion.div animate={open ? "open" : "closed"} className="relative">
            <button
              onClick={() => setOpen((pv) => !pv)}
              className="flex px-3 rounded-md transition-colors"
            >
              <div className="mt-4 w-[23rem] flex justify-between py-2 px-3 rounded-2xl hover:border hover:bg-[#deeff57e] border-slate-300 transition-all">
                <div className="flex flex-col items-start">
                  <h1 className="text-xl font-bold">Prince Kushwaha</h1>
                  <p className="text-neutral-700 ">prince121kk@gmail.com</p>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                    className="w-16 h-16 border rounded-full"
                    alt=""
                  />
                  <motion.span variants={iconVariants}>
                    <MdOutlineKeyboardArrowDown />
                  </motion.span>
                </div>
              </div>
            </button>

            <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              style={{ originY: "top", translateX: "-50%" }}
              className="flex flex-col p-1 rounded-md shadow-2xl absolute left-[70%] w-50 overflow-hidden"
            >
              <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
              <Option setOpen={setOpen} Icon={FiTrash} text="Logout" />
            </motion.ul>
          </motion.div>
        </div>

        <h1 className="text-xl mt-7 font-bold text-neutral-800 mb-8 px-5">
          Suggestions
        </h1>
        <div className="flex flex-col gap-4 overflow-y-scroll flex-1 no-scrollbar">
          {data.map((value) => {
            return <Card2 key={value.id} data={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
