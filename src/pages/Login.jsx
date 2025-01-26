import { ConfigProvider, Input } from "antd";
import React from "react";
import bg1 from "../assets/bg10.jpeg";
import logo from "../assets/festLogo.png";
const Login = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            inputFontSizeLG: 19,
            size: "middle",
            paddingBlock: 7,
            inputFontSize: 10,
            paddingInline: 16,
            activeBorderColor: "#00637C",
            hoverBorderColor: "#FFBF61",
          },
        },
      }}
    >
      <div className="w-screen h-screen bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] flex justify-center items-center">
        <div className="w-[90%]  sm:w-[80%] md:w-2/3 h-[90%] relative ">
          <div className="h-[80%] gap-4 w-full md:w-2/3 md:px-20 lg:w-[50%] 2xl:w-[50%] p-4 flex flex-col justify-center items-center absolute mt-22 left-0 rounded-4xl bg-white shadow-2xl drop-shadow-xl z-10">
            <form
              action=""
              className="flex w-full gap-9  flex-col justify-center items-center"
            >
              <img src={logo} alt="" />
              <Input placeholder="Email" tyle="email" size="large" />
              <Input.Password size="large" placeholder="Password" />
              <div className="w-full">
                <button className="w-full bg-primary text-2xl font-semibold text-white py-2 rounded-xl hover:bg-primary2">
                  LOGIN
                </button>
                <div className="mt-3">
                  <p className="text-md mt-2 text-gray-500 text-center">
                    Don't have an account yet?{" "}
                  </p>
                  <p className="text-md text-gray-500 text-center">
                    Sign up as{" "}
                    <span className="text-secondary hover:text-primary">
                      {" "}
                      user
                    </span>{" "}
                    /{" "}
                    <span className="text-secondary hover:text-primary">
                      organisation
                    </span>{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div
            className={`h-full hidden  md:flex justify-center items-center md:w-2/3 lg:w-3/5 absolute top-0 overflow-hidden right-0 rounded-4xl shadow-[-1px_10px_20px_1px_#666666] `}
          >
            <img src={bg1} alt="" className="absolute z-1 h-full w-full" />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Login;
