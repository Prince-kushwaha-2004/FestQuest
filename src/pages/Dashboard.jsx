import React from 'react'
import toast from 'react-hot-toast'
import { Outlet } from 'react-router'
import { SideBar } from '../components/SideBar/SideBar'
function Dashboard() {
    const allert = () => {
        toast.error("Hello World")
    }
    return (
        <div className='flex w-screen h-screen bg-gradient-to-br from-[#e6f3ff]  via-[#ebeca7] to-[#fff0f4]  '>
            <SideBar />
            <Outlet />
        </div>

    )
}
export default Dashboard