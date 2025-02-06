import React from 'react';
import { CgOrganisation } from "react-icons/cg";
import { FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { useParams } from 'react-router';
import data from '../../utils/data.json';
import call from './../../assets/call.svg';
import medal from './../../assets/medal.svg';
import trophywinner from './../../assets/trophywinner.svg';


const EventPreview = () => {
    let params = useParams()
    let id = params.id
    const EventData = data.filter((value) => {
        return value.id == id
    })[0]

    return (
        <div className='w-full  flex justify-center ms-24 xl:ms-0 relative '>

            <div className='flex justify-between absolute bg-white  border border-gray-300 w-full rounded-md pr-10'>
                <div className="flex gap-4 px-3 py-1">
                    <img
                        src={EventData.logo}
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h1 className="font-bold text-2xl cursor-pointer">
                            {EventData.name}
                        </h1>
                        <div className="text-sm py-1 font-light text-gray-800">{EventData.organiser}</div>
                        <div className="flex gap-4 ">

                            <div className="text-sm font-light text-teal-800">{EventData.eventType}</div>
                            <div className="text-sm font-light ">{EventData.mode}</div>

                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 py-5 ">


                    <p className="text-xl font-medium text-black">&#8377;999/-</p>

                    <button className=" px-4 py-3 bg-black text-white text-md rounded-lg hover:bg-[#00637cc0] ">
                        Register
                    </button>
                </div>
            </div>

            <div className='flex w-full  flex-col p-4 md:mt-15 mt-18 shadow-2xl overflow-y-auto'>


                <img src={EventData.img} alt="image" className=' h-[45%] pt-5 rounded-md' />

                <div className='flex p-3'>
                    <div className='w-2/3'>
                        <div className='heading-primary text-xl font-semibold'>Description</div>
                        <p className=' text-lg p-2'>
                            {EventData.description}
                            {EventData.description}
                            {EventData.description}
                            {EventData.description}
                            {EventData.description}

                        </p>

                    </div>

                    <div className='w-1/3 border border-gray-300 py-3 px-4 rounded-xl '>

                        <div className="flex flex-col gap-4 ">

                            <div className='flex justify-between'>
                                <p className="text-xl font-medium text-black">&#8377;999/-</p>
                                <div className='text-xl flex gap-3'>
                                    <IoBookmarkOutline />
                                    <IoIosShareAlt />

                                </div>

                            </div>
                            <button className=" px-4 py-3 bg-black text-white text-md rounded-lg hover:bg-[#00637cc0] ">
                                Register
                            </button>
                        </div>

                        <div className=' flex gap-4 flex-wrap p-3'>
                            <div className='flex gap-3' >
                                <div className='border p-2 border-gray-300 rounded-xl'>
                                    <FaPeopleGroup className='text-2xl' />

                                </div>
                                <div>
                                    <p className='font-medium'>Total registration</p>
                                    <p>{EventData.registered}</p>

                                </div>
                            </div>
                            <div className='flex gap-3' >
                                <div className='border p-2 border-gray-300 rounded-xl'>
                                    <FaPeopleLine className='text-2xl' />

                                </div>
                                <div>
                                    <p className='font-medium'>Team Size</p>
                                    <p>3-6</p>

                                </div>
                            </div>
                            <div className='flex gap-3' >
                                <div className='border p-2 border-gray-300 rounded-xl'>
                                    <GoClock className='text-2xl' />

                                </div>
                                <div>
                                    <p className='font-medium'>Registration Deadline</p>
                                    <p>{EventData.daysLeft} Days</p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex gap-3 '>
                    <div className='flex flex-col  rounded-md border border-gray-300 w-1/2 p-3'>
                        <div className="flex gap-3">
                            <img src={trophywinner} className='h-10' alt="" />
                            <div className='text-xl heading-primary'>Reward and Prizes</div>
                        </div>
                        <div className='px-3 py-2 flex gap-4 justify-around flex-col'>
                            <div className='text-xl flex justify-between items-center border border-gray-300 rounded-lg px-4 '>
                                <div>
                                    <p>                                    First Prize
                                    </p>
                                    <p className='text-lg'>&#8377;{EventData.firstPrize}</p>
                                </div>

                                <div>
                                    <img src={medal} className='h-20' alt="" />
                                </div>
                            </div>
                            <div className='text-xl flex justify-between items-center border border-gray-300 rounded-lg px-4 '>
                                <div>
                                    <p>                                    Second Prize
                                    </p>
                                    <p className='text-lg'>&#8377;{EventData.secondPrize}</p>
                                </div>

                                <div>
                                    <img src={medal} className='h-20' alt="" />
                                </div>
                            </div>
                            <div className='text-xl flex justify-between items-center border border-gray-300 rounded-lg px-4 '>
                                <div>
                                    <p>                                    Third Prize
                                    </p>
                                    <p className='text-lg'>&#8377;{EventData.thirdPrize}</p>
                                </div>

                                <div>
                                    <img src={medal} className='h-20' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col border rounded-md border-gray-300 w-1/2 p-3'>
                        <div className="flex gap-3">
                            <img src={call} className='h-6' alt="" />
                            <div className='text-xl heading-primary'>Contact Details</div>
                        </div>

                        <div className='flex gap-3 flex-col mt-3'>
                            <div className='flex justify-between rounded-xl gap-3 border border-gray-300 text-2xl p-3'>
                                <div className='flex gap-3'>
                                    <MdOutlineSupervisorAccount />
                                    <p className='text-lg'> Event coordinator | Shivanshu  </p>
                                </div>
                                <p className='text-sm'>+91 8977879087 </p>
                            </div>
                            <div className='flex justify-between rounded-xl gap-3 border border-gray-300 text-2xl p-3'>
                                <div className='flex gap-3'>
                                    <MdOutlineSupervisorAccount />
                                    <p className='text-lg'> Event coordinator | Suhani  </p>
                                </div>
                                <p className='text-sm'>+91 8977879087 </p>
                            </div>
                            <div className='flex justify-between rounded-xl gap-3 border border-gray-300 text-2xl p-3'>
                                <div className='flex gap-3'>
                                    <MdOutlineSupervisorAccount />
                                    <p className='text-lg'> Event coordinator | Prince  </p>
                                </div>
                                <p className='text-sm'>+91 8977879087 </p>
                            </div>
                            <div className='flex justify-between rounded-xl gap-3 border border-gray-300 text-2xl p-3'>
                                <div className='flex gap-3'>
                                    <CgOrganisation />
                                    <p className='text-lg'> Organiser </p>
                                </div>
                                <p className='text-sm'>+91 8977879087 </p>
                            </div>
                            <div className='flex justify-between rounded-xl gap-3 border border-gray-300 text-2xl p-3'>
                                <div className='flex gap-3'>
                                    <CgOrganisation />
                                    <p className='text-lg'>                                {EventData.organiser}
                                    </p>
                                </div>
                                <p className='text-sm'>+91 8977879087 </p>
                            </div>

                        </div>




                    </div>


                </div>

            </div>

        </div>
    )
}

export default EventPreview