import { Button, Input } from 'antd';
import React from "react";
import bg1 from "../assets/bg5.jpeg";
import logo from "../assets/festLogo.png";
const Login = () => {
    const inputBoxStyle = {
        fontSize: "1.5rem",
        padding: "0.5rem 2rem"
    }
    const buttonStyle = {
        width: "100%",
        fontSize: "1.8rem",
        padding: "1.7rem 2.5rem",
        borderRadius: "1.7rem",
        fontWeight: "bold",
        backgroundColor: "#8a83fd",
    }
    return (
        <div className='w-screen h-screen bg-slate-100 flex justify-center items-center'>
            <div className='w-[90%]  sm:w-[80%] md:w-2/3 h-[90%] relative '>
                <div className='h-[80%] gap-4 w-full md:w-2/3 md:px-20 lg:w-[50%] 2xl:w-[50%] p-4 flex flex-col justify-center items-center absolute mt-22 left-0  rounded-4xl bg-white shadow-2xl drop-shadow-2xl z-10'>
                    <form action="" className='flex w-full gap-9  flex-col justify-center items-center'>
                        {/* <h1 className="text-6xl text-violet-700 font-bold ">Sign In</h1> */}
                        <img src={logo} alt="" />
                        <Input placeholder="Email" tyle="email" size='large' style={inputBoxStyle} />
                        <Input.Password size='large' placeholder="Password" style={inputBoxStyle} />
                        <Button size='large' type='submit' variant="solid" color="primary" style={buttonStyle}>
                            Login
                        </Button>
                        <div className=''>
                            <p className='text-xl  text-neutral-600 text-center'>Don't have an account yet? </p>
                            <p className='text-xl  text-neutral-600 text-center'>Sign up as <span className='text-purple-600 font-bold'> user</span> / <span className='text-purple-600 font-bold'>organisation</span> </p>
                        </div>
                    </form>
                </div>
                <div className={`h-full hidden  md:flex justify-center items-center md:w-2/3 lg:w-3/5 absolute top-0 overflow-hidden   right-0 rounded-4xl shadow-[-1px_10px_16px_2px_#666666] `}>
                    <img src={bg1} alt="" className='absolute z-1 h-full w-full' />

                </div>
            </div>
        </div>
    );
};

export default Login;
