import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const items = [
    {
      key: '1',
      label: (
        <Link to="register">Register as user</Link>

      ),
    },
    {
      key: '2',
      label: (
        <Link to="login">Register as organisation</Link>

      ),
    },

  ];
  return (

    <div className="min-h-screen flex flex-col">
      <nav className="bg-white/80 backdrop-blur-sm">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src="src/assets/festLogo.png"
              className="h-10 mr-2"
              alt="Logo"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="login" className="px-6 py-2 bg-[#00637C] text-white rounded-full hover:bg-[#00637cc0] ">
              Login
            </Link>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <button className="px-4 py-2 text-[#00637C] hover:bg-indigo-50 rounded-full"> Sign Up <CaretDownOutlined /></button>
                </Dropdown>
              </Space>
            </Space>

          </div>
        </div>
      </nav>

      <div className="m-4 mt-0 border-2 border-slate-200 flex-1 bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] rounded-4xl px-4 md:px-6 lg:px-60 2xl:px-80 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-semibold text-gray-800 mb-4 text-center leading-tight">
          Think, plan, and track <br /><span className="text-neutral-400"> all in one place</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-8 text-center max-w-2xl">
          Efficiently manage your tasks and boost productivity with our
          intuitive event planning platform.
        </p>
        <a
          href="#"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg "
        >
          Get free demo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm shadow-md rounded-lg p-6 hover:shadow-xl ">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Comprehensive Planning
            </h3>
            <p className="text-gray-600">
              Easily create detailed event plans, set deadlines, and assign
              tasks to your team.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm shadow-md rounded-lg p-6 hover:shadow-xl ">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600">
              Monitor progress, view task status, and receive timely updates on
              your events.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm shadow-md rounded-lg p-6 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Connect with your favorite tools and apps to streamline your event
              management workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
