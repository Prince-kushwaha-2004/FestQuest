import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import {
  FiChevronDown,
  FiChevronsRight,
  FiHome,
  FiUsers,
} from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
import { RiCalendarEventLine } from "react-icons/ri";
import logo from "../../assets/festLogo.png";



export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="absolute xl:sticky top-0 h-screen shrink-0 shadow-lg border-r bg-teal-600 backdrop-blur-3xl border-slate-300 p-2"
      style={{
        width: open ? "285px" : "fit-content",
      }}
    >
      <TitleSection open={open} />
      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={IoMdDoneAll}
          title="Registered"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FaRegBookmark}
          title="Saved"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={RiCalendarEventLine}
          title="My Events"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiUsers}
          title="Members"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-2xl transition-colors ${selected === title
        ? "shadow bg-[#71f1cb11] text-white border border-slate-300"
        : "text-white hover:bg-gray-300 hover:text-black"
        }`}
      style={{
        padding: open ? "1.5rem" : "1.5rem 1rem",
      }}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-xl"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-lg"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-10 mt-4 pb-3  ">
      <div className={"flex cursor-pointer bg-white items-center justify-between shadow-md rounded-2xl transition-all hover:scale-103 hover:shadow-lg"}  >
        <div className="flex px-8 py-2 items-center gap-2">
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <img src={logo} alt="" />
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};
const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-gray-400"
    >
      <div className="flex items-center px-6 py-3 text-white">
        <motion.div
          layout
          className="grid size-10 place-content-center text-xl"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-lg font-medium "
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
