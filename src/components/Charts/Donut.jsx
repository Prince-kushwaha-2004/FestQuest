import { motion } from "framer-motion";
import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Donut = () => {

    const [open, setOpen] = useState(false);

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


    const LocationSelect = () => {
        const [selected, setSelected] = useState("All Events");

        const [open, setOpen] = useState(false);

        const locations = ["All Events", "Rann", "Epoque", "Quiz"];

        return (
            <div className="relative">
                <motion.div animate={open ? "open" : "closed"}>
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="w-[200px] flex items-center justify-between px-4 py-2.5 
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


    const [state, setState] = useState({

        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                    expandOnClick: false

                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            title: {
                text: 'Gradient Donut with custom Start-angle'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    });
    return (
        <>
            <LocationSelect />

            <div id="chart">
                <ReactApexCharts options={state.options} series={state.series} type="donut" width={350} />

            </div>
        </>
    )
}

export default Donut