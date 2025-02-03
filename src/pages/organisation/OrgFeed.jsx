import { DatePicker, Form, Input, Modal, Steps } from "antd";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { FiEdit, FiTrash } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiAddLargeLine } from "react-icons/ri";
import Bar from "../../components/Charts/Bar";
import Donut from "../../components/Charts/Donut";
import LineBar from "../../components/Charts/LineBar";


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const OrgFeed = () => {
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




    const [state1, setState1] = useState({

        series: [{
            name: 'Registrations',
            data: [44, 55, 57, 56, 61]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87]
        },],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    borderRadius: 2,
                    borderRadiusApplication: 'end',

                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Rann', 'Epoque', 'Prastuti', 'HackwithIndia', 'Cricket'],
            },
            yaxis: {
                title: {
                    text: '(People)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "" + val + " thousands"
                    }
                }
            }
        },


    });


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const description = 'This is a description.';

    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);





    return (
        <div className='flex flex-col justify-between w-full h-screen p-3'>

            <div className='flex justify-between items-center px-3 rounded-xl  font-bold  py-3'>
                <span className="text-3xl">Overview</span>
                <div className="flex items-center justify-center ">
                    <motion.div animate={open ? "open" : "closed"} className="relative">
                        <button
                            onClick={() => setOpen((pv) => !pv)}
                            className="flex px-3 rounded-md transition-colors"
                        >
                            <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                                <div className=" flex flex-col items-start px-3 ">
                                    <h1 className="text-lg font-bold">Krishna institute of Engineering</h1>
                                    <p className="text-neutral-700 text-sm ">prince121kk@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                                        className="w-12 h-12 border rounded-full"
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
                            className="flex flex-col p-1 rounded-md shadow-2xl absolute left-[70%] w-50 overflow-hidden backdrop-blur-2xl"
                        >
                            <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
                            <Option setOpen={setOpen} Icon={FiTrash} text="Logout" />
                        </motion.ul>
                    </motion.div>
                </div>
            </div>

            <div className='flex gap-6 px-4'>

                <div className='flex flex-col gap-5 py-4 bg-[#deeff57e] border border-slate-300 rounded-2xl w-1/4 '>
                    <div className='px-3 text-xl font-bold'>
                        Total Events
                    </div>
                    <div className=' px-3 text-xl font-semibold'>
                        67
                    </div>

                </div>

                <div className='flex flex-col gap-5 py-4 border border-slate-300 rounded-2xl w-1/4 '>
                    <div className='px-3 text-xl bg-[#deeff57e] font-bold'>
                        Live Events
                    </div>
                    <div className=' px-3 text-xl font-semibold'>
                        6
                    </div>

                </div>

                <div className='flex flex-col gap-5 py-4 border border-slate-300 rounded-2xl w-1/4 '>
                    <div className='px-3 text-xl bg-[#deeff57e] font-bold'>
                        Ended Events
                    </div>
                    <div className=' px-3 text-xl font-semibold'>
                        60
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center gap-5 py-6 border border-slate-300 rounded-2xl w-1/4 ' onClick={showModal}>
                    <div className='px-3 text-xl bg-[#deeff57e] font-bold'>
                        Add Event
                    </div>
                    <div className=' px-3 text-xl font-semibold'>
                        <RiAddLargeLine />

                    </div>


                </div>


                <Modal title="Add New Event" open={isModalOpen} width={1000} onOk={handleOk} onCancel={handleCancel}>
                    <div>
                        <Steps
                            current={1}
                            items={[
                                {
                                    title: 'Finished',
                                    description,
                                },
                                {
                                    title: 'In Progress',
                                    description,
                                    subTitle: 'Left 00:00:08',
                                },
                                {
                                    title: 'Waiting',
                                    description,
                                },
                            ]}
                        />
                    </div>
                    <div className="p-2 mt-6">

                        <Form
                            {...formItemLayout}

                            form={form}
                            variant={variant || 'filled'}
                            initialValues={{ variant: 'filled' }}
                        >
                            <div className="flex w-full justify-between">
                                <Form.Item className="w-1/2" label="Event Name" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item className="w-1/2" label="Event Name" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="flex w-full justify-between">

                                <Form.Item
                                    className="w-1/2"
                                    label="DatePicker"
                                    name="DatePicker"
                                    rules={[{ required: true, message: 'Please input!' }]}
                                >
                                    <DatePicker />
                                </Form.Item>
                            </div>
                        </Form>

                    </div>
                </Modal>

            </div>

            <div className='flex gap-4   w-full p-4'>



                <div className="border border-slate-300  rounded-2xl px-5 w-2/5 py-8" >

                    <Bar />
                </div>

                <div className="border border-slate-300 gap-4  rounded-2xl px-3 w-2/5 py-3 flex flex-col justify-center items-center">

                    <Donut />
                </div>
                <div className="border border-slate-300  rounded-2xl px-5 w-2/5 py-8" >
                    <LineBar />

                </div>


            </div>

            <div className=" flex  h-[18rem] gap-4 px-5">
                <div className="border flex gap-4 flex-col border-slate-300 w-1/3 rounded-2xl p-3 ">

                    <div className="text-xl px-2 font-semibold">
                        Events Coordintors
                    </div>
                    <div className="flex gap-3 overflow-y-scroll no-scrollbar flex-col">
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-lg font-bold">Shivanshu Gupta</h1>
                                    <p className="text-neutral-700 text-sm font-bold ">Rann</p>
                                </div>
                                <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p>

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <div className="flex items-center gap-3">

                                    <h1 className="text-lg font-bold">Suhani Singh</h1>
                                    <p className="text-neutral-700 text-sm font-bold ">Epoque</p>
                                </div>

                                <p className="text-neutral-700 text-sm ">suhani885@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <div className="flex items-center gap-3">

                                    <h1 className="text-lg font-bold">Prince Kumar Kushwaha</h1>
                                    <p className="text-neutral-700 text-sm font-bold ">Rann</p>
                                </div>

                                <p className="text-neutral-700 text-sm ">prince121kk@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <div className="flex items-center gap-3">

                                    <h1 className="text-lg font-bold">Prince Kumar Kushwaha</h1>
                                    <p className="text-neutral-700 text-sm font-bold ">Rann</p>
                                </div>

                                <p className="text-neutral-700 text-sm ">prince121kk@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>

                    </div>

                </div>
                <div className="border flex gap-4 flex-col border-slate-300 w-1/3 rounded-2xl p-3 ">

                    <div className="text-xl px-2 font-semibold">
                        Events
                    </div>
                    <div className="flex gap-3 overflow-y-scroll no-scrollbar flex-col">
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <h1 className="text-lg font-bold">Rann</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://images-platform.99static.com/WFbHcJTGYNOP9fOW8RIu4L_3meQ=/0x0:1700x1700/500x500/top/smart/99designs-contests-attachments/134/134078/attachment_134078518"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <h1 className="text-lg font-bold">Rann</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://images-platform.99static.com/WFbHcJTGYNOP9fOW8RIu4L_3meQ=/0x0:1700x1700/500x500/top/smart/99designs-contests-attachments/134/134078/attachment_134078518"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <h1 className="text-lg font-bold">Rann</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://images-platform.99static.com/WFbHcJTGYNOP9fOW8RIu4L_3meQ=/0x0:1700x1700/500x500/top/smart/99designs-contests-attachments/134/134078/attachment_134078518"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-3 ">
                                <h1 className="text-lg font-bold">Rann</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://images-platform.99static.com/WFbHcJTGYNOP9fOW8RIu4L_3meQ=/0x0:1700x1700/500x500/top/smart/99designs-contests-attachments/134/134078/attachment_134078518"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>

                    </div>

                </div>
                <div className="border flex gap-4 flex-col border-slate-300 w-1/3 rounded-2xl p-3 ">

                    <div className="text-xl px-2 font-semibold">
                        Payments
                    </div>

                    <div className="flex gap-3 overflow-y-scroll no-scrollbar flex-col">
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;99 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;10 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;919 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;992 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;992 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className=" flex justify-between py-2 px-4 rounded-2xl border hover:bg-[#deeff57e] border-slate-300 transition-all">
                            <div className=" flex flex-col items-start px-2 py-1 ">
                                <h1 className="text-md ">&#8377;99 credited to your bank through Razorpay.</h1>
                                <p className="text-neutral-700 text-sm  ">30 Jan 2024</p>
                                {/* <p className="text-neutral-700 text-sm ">shivanshu1109@gmail.com</p> */}

                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src="https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png"
                                    className="w-12 h-12 border rounded-full"
                                    alt=""
                                />

                            </div>
                        </div>


                    </div>
                </div>

            </div>





        </div>
    )
}

export default OrgFeed