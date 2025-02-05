import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  MobileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Form, Input, message } from "antd";
import React, { useState } from "react";

import logo from "../assets/festLogo.png";
import StepwiseProcess from "../components/StepwiseProcess";

const Register = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const processStep = [
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
  ];

  const handleSendOTP = () => {
    message.success("OTP sent to your email");
  };

  const handleFinalSubmit = async () => {
    try {
      console.log("Final Registration Data:", registerData);
      message.success("Registration Successful!");
    } catch (errorInfo) {
      message.error("Please complete all fields correctly");
    }
  };

  const handleNextStep = () => {
    setCurrent(current + 1);
  };

  return (
    <>
      <div className="w-full justify-center h-screen flex items-center bg-teal-500 md:p-10">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#1677ff",
                inputFontSizeLG: 24,
                size: "middle",
                paddingBlock: 10,
                inputFontSize: 18,
                paddingInline: 15,
                activeBorderColor: "#00637C",
                hoverBorderColor: "#FFBF61",
              },
              Button: {
                paddingInline: 29,
                paddingBlock: 36,
                defaultBg: "#00637C",
              },
              Steps: {
                colorPrimary: "#00637C",
                colorText: "#000",
                colorTextDisabled: "#FFBF00",
                colorTextQuaternary: "#FFBF00",
                fontSize: 20,
                lineHeight: 6,
              },
              Select: {
                activeBorderColor: "#00637C",
                hoverBorderColor: "#FFBF61",
              },
            },
          }}
        >
          <div className="absolute flex-col lg:flex hidden justify-center inset-y-0 left-0 backdrop-invert backdrop-opacity-10 items-end z-10 bg-themeColor/10 h-full w-1/3">
            <div className="w-2/3">
              <StepwiseProcess
                current={current}
                itemsArray={processStep}
                logo={logo}
              />
            </div>
          </div>
          <div className="drop-shadow-md static z-0 rounded-2xl self-center shadow border bg-white border-slate-300 h-[90%] w-[94%] flex justify-end">
            <div className="flex flex-col justify-center items-center lg:w-2/3 w-full">
              <div className="flex lg:hidden w-2/3">
                <img src={logo} alt="" />
              </div>

              <div className="flex justify-center sm:text-4xl mb-20 text-3xl font-semibold text-teal-700">
                Create Your Free Account
              </div>

              <Form
                form={form}
                className="flex md:w-2/3 w-full gap-4 flex-col items-center justify-center"
              >
                {current === 0 && (
                  <>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name",
                        },
                      ]}
                      className="w-full"
                    >
                      <Input
                        prefix={<UserOutlined className="text-gray-400" />}
                        placeholder="Name"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please input a valid email",
                        },
                      ]}
                      className="w-full"
                    >
                      <Input
                        prefix={<MailOutlined className="text-gray-400" />}
                        placeholder="Email"
                      />
                    </Form.Item>
                    <button
                      onClick={() => handleNextStep(0)}
                      className="w-full bg-teal-500 text-lg text-white py-2 rounded-xl hover:bg-teal-600"
                    >
                      Next
                    </button>
                  </>
                )}

                {current === 1 && (
                  <>
                    <Form.Item
                      name="otp"
                      rules={[
                        {
                          required: true,
                          message: "Please input the OTP",
                        },
                      ]}
                      className="w-full"
                    >
                      <Input
                        prefix={<MobileOutlined className="text-gray-400" />}
                        placeholder="Enter OTP"
                        maxLength={6}
                      />
                    </Form.Item>
                    <div className="flex w-full gap-2">
                      <button
                        onClick={handleSendOTP}
                        className="w-1/3 mt-10 bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                      >
                        Resend
                      </button>
                      <button
                        onClick={() => handleNextStep(1)}
                        className="w-1/3 mt-10 bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {current === 2 && (
                  <>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password",
                          min: 8,
                          max: 16,
                        },
                      ]}
                      className="w-full"
                    >
                      <Input.Password
                        name="password"
                        value={registerData.password}
                        placeholder="Password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password",
                        },
                      ]}
                      className="w-full"
                    >
                      <Input.Password
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        placeholder="Confirm Password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                    <button
                      onClick={handleFinalSubmit}
                      className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                    >
                      Register
                    </button>
                  </>
                )}
              </Form>
              <div className="flex justify-center items-center mt-3">
                <p className="text-md text-gray-800 text-center">
                  Already have an account?{" "}
                  <span className="text-amber-500 hover:text-primary">
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </>
  );
};

export default Register;
