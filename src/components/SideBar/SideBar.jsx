import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiHome,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import logo from "../../assets/festLogo.png";
export const SideBar = () => {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="absolute xl:sticky top-0 h-screen shrink-0 shadow-lg border-r backdrop-blur-2xl border-slate-300 p-2"
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
          Icon={FiShoppingCart}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiTag}
          title="Registered"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
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
      className={`relative flex h-10 w-full items-center rounded-2xl transition-colors ${
        selected === title
          ? "shadow bg-[#6cd4b527]  border border-slate-300"
          : "text-slate-700 hover:bg-[#1d2f331e] hover:text-black"
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
          className="text-lg font-medium"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-10 mt-4  border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between shadow border  border-slate-300 rounded-2xl transition-all   hover:scale-103 hover:shadow-lg   ">
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
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-[#1d2f331e]"
    >
      <div className="flex items-center px-6 py-3">
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
            className="text-lg font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
