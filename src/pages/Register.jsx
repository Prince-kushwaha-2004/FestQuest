import { Button, ConfigProvider, Input, Steps } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../assets/festLogo.png";
import Axios from "../axios/Axios";
import HandleChange from "../utils/Function";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });

  const [next, setNextState] = useState(0);

  const getOTP = () => {
    const request = {
      method: "POST",
      dataObject: registerForm,
    };
    Axios(request).then((res) => {
      console.log(res);
    });
  };

  const [current, setCurrent] = useState(0);
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };

  useEffect(() => {}, []);
  const description = "This is a description.";
  const sharedProps = {
    onChange,
    onInput,
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              inputFontSizeLG: 19,
              paddingBlock: 10,
              inputFontSize: 10,
              paddingInline: 20,
              activeBorderColor: "#00637C",
              hoverBorderColor: "#FFBF61",
            },
            Steps: {
              colorPrimary: "#00637C",
              colorText: "#000",
              colorTextDisabled: "#FFBF00",
              colorTextQuaternary: "#FFBF00",
              fontSize: 16,
              lineHeight: 4,
            },
          },
        }}
      >
        <div className="w-full justify-center h-screen flex items-center  bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] p-25">
          <div className="drop-shadow-md static z-0 rounded-2xl self-center bg-white h-[90%] w-[90%] flex justify-end">
            <div className="flex flex-col justify-center items-center w-2/3 ">
              <div className="flex justify-center text-4xl font-bold text-themeColor mb-15">
                Create your free account
              </div>

              {current == 0 ? (
                <div className="gap-8 w-full md:w-2/3 flex flex-col justify-center items-center rounded-4xl">
                  <Input
                    name="name"
                    value={registerForm.name}
                    onChange={(e) => HandleChange(e, setRegisterForm)}
                    size="large"
                    placeholder="Name"
                  />
                  <Input
                    name="email"
                    value={registerForm.email}
                    onChange={(e) => HandleChange(e, setRegisterForm)}
                    size="large"
                    placeholder="Email"
                  />
                  <button
                    onClick={(e) => {
                      setCurrent(1);
                    }}
                    className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                  >
                    Next
                  </button>
                </div>
              ) : current == 1 ? (
                <div className="gap-8 w-full md:w-2/3 flex flex-col justify-center items-center rounded-4xl">
                  <Input.OTP
                    formatter={(str) => str.toUpperCase()}
                    {...sharedProps}
                  />

                  <button
                    onClick={(e) => setCurrent(2)}
                    className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                  >
                    Next
                  </button>
                </div>
              ) : current == 2 ? (
                <div className="gap-8 w-full md:w-2/3 flex flex-col justify-center items-center rounded-4xl">
                  <Input
                    name="password"
                    value={registerForm.password}
                    onChange={(e) => HandleChange(e, setRegisterForm)}
                    size="large"
                    placeholder="Password"
                  />
                  <Input
                    name="confirmPassword"
                    value={registerForm.confirmPassword}
                    onChange={(e) => HandleChange(e, setRegisterForm)}
                    size="large"
                    placeholder="Confirm password"
                  />
                  <button
                    onClick={(e) => console.log(registerForm)}
                    className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <></>
              )}

              <div className="flex justify-center items-center mt-3">
                <p className="text-md text-gray-500 text-center">
                  Already have an account?{" "}
                  <span className="text-secondary hover:text-primary">
                    {" "}
                    Sign In
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-y-0 left-0 backdrop-invert backdrop-opacity-10 items-end z-10 bg-themeColor/15 h-full w-1/3 p-5">
            <div className="w-2/3 mt-[8rem]">
              <div className="w-[85%] ml-7">
                <img src={logo} alt="" />
              </div>

              <div className="ml-10 mt-10">
                <Steps
                  current={current}
                  direction="vertical"
                  items={[
                    {
                      title: "Step 1",
                      description: "Email verification",
                    },
                    {
                      title: "Step 2",
                      description: "OTP confirmation",
                    },
                    {
                      title: "Step 3",
                      description: "Confirm password",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Register;
