
import { motion } from "framer-motion";
import { React, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const DropDownSelect = ({ data }) => {
    const [selected, setSelected] = useState(data[0]);

    const [open, setOpen] = useState(false);
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

export default DropDownSelect