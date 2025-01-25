import { Button, Input } from 'antd';
import React from "react";
const Login = () => {
    return (
        <div className='w-screen h-screen bg-slate-100 flex justify-center items-center'>
            <div className='w-[90%] sm:w-[80%] md:w-2/3 h-4/5 relative '>
                <div className='h-[80%] gap-4 w-full md:w-2/3 md:px-8 lg:w-[50%] 2xl:w-[40%] p-4 flex flex-col justify-center items-center absolute mt-20 left-0 lg:left-10 xl:left-28 2xl:left-32 rounded-4xl bg-white shadow-2xl drop-shadow-2xl z-10'>
                    <form action="" className='flex w-full gap-4 flex-col justify-center items-center'>
                        <h1 className="text-5xl text-violet-700 font-bold">Sign In</h1>
                        <Input placeholder="Email" tyle="email" size='large' />
                        <Input.Password size='large' placeholder="Password" />
                        <Button size='large' type='submit' color="purple" variant="solid" className='text-3xl'>
                            Login
                        </Button>
                    </form>
                </div>
                <div className='h-full hidden md:block md:w-2/3 lg:w-1/2 absolute top-0 lg:right-10 right-0 xl:right-28 2xl:right-32 rounded-4xl shadow-[-1px_10px_16px_2px_#666666] bg-[url(https://www.pixground.com/wp-content/uploads/2023/07/Abstract-Gradient-Blue-Layers-AI-Generated-4K-Wallpaper-1081x608.jpg)] bg-cover'></div>
            </div>
        </div>
    );
};

export default Login;
