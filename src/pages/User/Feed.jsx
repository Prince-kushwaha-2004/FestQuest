import { Dropdown, Space } from "antd";
import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Card2 from '../../components/Cards/Card2';
import Cards from '../../components/Cards/Cards';
function Feed() {
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
    return (
        <>
            <div className=' flex-1 overflow-scroll p-8 no-scrollbar ms-24 xl:ms-0'>
                <div className="flex items-center justify-between lg:hidden">
                    <h1 className='text-3xl font-bold text-neutral-800 '>Featured</h1>
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomRight"
                            >
                                <div className=' flex items-center justify-between py-2 px-4 rounded-2xl m-2   transition-all '>
                                    <div className='flex items-center gap-1'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s" className='w-12 h-12 border rounded-full' alt="" />

                                        <MdOutlineKeyboardArrowDown className='text-3xl' />
                                    </div>
                                </div>

                            </Dropdown>
                        </Space>
                    </Space>
                </div>

                <div className='flex  gap-4 overflow-scroll no-scrollbar mb-10 lg:hidden'>
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </div>
                <h1 className='text-3xl font-bold text-neutral-800 mb-4'>Feeds</h1>
                <div className='flex flex-col gap-4'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

            <div className='w-[25rem] shadow bg-[#2847270e]  border-l border-slate-300 hidden lg:block overflow-scroll no-scrollbar' >
                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                        >
                            <div className='mt-4 w-[23rem]  flex items-center justify-between py-2 px-4 rounded-2xl m-2 hover:border hover:bg-[#deeff57e]  border-slate-300  transition-all '>
                                <div>
                                    <h1 className='text-xl font-bold'>Prince Kushwaha</h1>
                                    <p className='text-neutral-700'>prince121kk@gmail.com</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOfn_ZHQ1-R7tn68a-WXKQ7nS6a8MD5PGA&s" className='w-16 h-16 border rounded-full' alt="" />

                                    <MdOutlineKeyboardArrowDown className='text-3xl' />
                                </div>
                            </div>

                        </Dropdown>
                    </Space>
                </Space>


                <h1 className='text-xl mt-8 font-bold text-neutral-800 mb-8 px-5'>Featured</h1>
                <div className='flex flex-col gap-4'>
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </div>
            </div>
        </>
    )
}

export default Feed