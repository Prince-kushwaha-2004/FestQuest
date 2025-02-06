import { Dropdown, Space } from "antd";
import { motion } from "framer-motion";
import { React, useEffect, useRef, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Card2 from "../../components/Cards/Card2";
import Cards from "../../components/Cards/Cards";
import DropDownSelect from "../../components/Dropdown/DropDownSelect";
import data from "../../utils/data.json";
import smallLogo from "./../../assets/favicon.png";

function Feed() {
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
  const locations = ["All Locations", "Delhi", "Noida", "Bangalore"];
  const filterEvent = ["All Event", "Technical", "Sports", "Cultural"];

  const LocationSelect = ({ data }) => {
    const [selected, setSelected] = useState(data[0]);

    const [open, setOpen] = useState(false);

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
            {data.map((location) => (
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

  const [eventData, setEventData] = useState([]);

  const getData = () => {
    const obj = {
      apiName: "",
      method: "GET",
      dataObject: "",
      contentType: "",
    };
    // Axios(obj).then((res) => {
    //   if (res.status == 200) {
    //     setEventData(eventData)
    //   }
    // }).catch((err) => {
    // })
  };
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
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
  useEffect(() => {
    // getData()
  }, []);

  //InfiniteScroll
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("ScrollTop+", scrollTop, clientHeight, scrollHeight);
      }
    }
  };

  return (
    <>
      <div
        className=" flex-1 overflow-scroll px-8 no-scrollbar ms-24 xl:ms-0  "
        onScroll={onScroll}
        ref={listInnerRef}
      >
        <div className="flex items-center justify-between lg:hidden mt-5">
          <h1 className="text-3xl font-serif font-bold text-teal-800 heading-primary  ">
            Suggestions
          </h1>
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

        <div className="flex gap-4 overflow-scroll no-scrollbar box mb-10 lg:hidden">
          {data.map((value, index) => {
            return <Card2 index={index} key={value.id} data={value} />;
          })}
        </div>
        <div className="flex flex-col gap-5 mb-8 ">
          <div className="flex items-center justify-between relative">
            {/* <img
              src={smallLogo}
              className="h-10 absolute top-1 left-0 rotate"
              alt=""
            /> */}

            <h1 className="text-4xl font-bold text-primary heading-primary pl-7 px-5">
              Events
            </h1>

            <div className=" items-center justify-center hidden lg:flex ">
              <motion.div
                animate={open ? "open" : "closed"}
                className="relative"
              >
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      placement="bottomRight"
                    >
                      <div className=" flex items-center justify-between py-2 px-4 rounded-2xl m-2 transition-all ">
                        <p className="text-neutral-700  font-semibold px-3">
                          {" "}
                          prince121kk@gmail.com
                        </p>

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

                <motion.ul
                  initial={wrapperVariants.closed}
                  variants={wrapperVariants}
                  style={{ originY: "top", translateX: "-50%" }}
                  className="flex flex-col p-1 rounded-md shadow-2xl absolute left-[70%] w-50 text-4xl overflow-hidden"
                >
                  <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
                  <Option setOpen={setOpen} Icon={FiTrash} text="Logout" />
                </motion.ul>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 px-5">
            <div className="relative flex-1 ">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-6 py-2.5 bg-white/50 backdrop-blur-sm 
                         border border-gray-200 rounded-xl focus:outline-none 
                         focus:ring-2 focus:ring-blue-50 focus:border-transparent
                         transition-all duration-300 hover:bg-white/80 hover:shadow-md"
              />
            </div>

            <DropDownSelect data={locations} className="w-1/2" />
            <DropDownSelect data={filterEvent} className="w-1//2" />
          </div>
        </div>

        <div className="flex justify-center ml-3 flex-wrap gap-7">
          {data.map((value, index) => {
            return <Cards index={index} key={value.id} data={value} />;
          })}
        </div>
      </div>

      <div className="w-[21rem] shadow bg-teal-600  border-l border-slate-300 hidden lg:flex flex-col">
        <h1 className="text-3xl font-serif heading-primary mt-5 font-bold text-white mb-8 px-5">
          Suggestions
        </h1>
        <div className="flex flex-col items-center gap-4 overflow-y-scroll p-4 flex-1 no-scrollbar">
          {data.map((value, index) => {
            return <Card2 key={value.id} index={index} data={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
