import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] min-h-screen">
      <nav className="bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src="src/assets/festLogo.png"
              className="h-10 mr-2"
              alt="Logo"
            />
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 "
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4 text-center leading-tight">
          Think, plan, and track all in one place
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-2xl">
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
