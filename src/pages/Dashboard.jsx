import React from 'react'
import toast from 'react-hot-toast'
import { Outlet } from 'react-router'
function Dashboard() {
    const allert = () => {
        toast.error("Hello World")
    }
    return (
        <div className='flex w-screen h-screen'>
            <div className="sidebar bg-green-400 w-[20rem]">Sidebar</div>
            <Outlet />
        </div>

    )
}

export default Dashboard