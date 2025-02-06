import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg10.jpeg";
import logo from "../assets/festLogo.png";
import Axios from "../axios/Axios";
const Login = () => {
  const onFinish = (value) => {
    console.log(value)
    const req = {
      apiName: "test",
      method: "post",
      dataObject: value,
    }
    Axios(req)
      .then((response) => {
        console.log(response)
        toast.success("login")

      })
      .catch((error) => {
        console.log(error)
        toast.error("invalid credential")
      })
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: "#009688",
            inputFontSizeLG: 24,
            size: "middle",
            paddingBlock: 10,
            inputFontSize: 18,
            paddingInline: 15,
            activeBorderColor: "#009688",
            hoverBorderColor: "#009688",
          },
          Button: {
            defaultBg: "#009688",
            defaultColor: "#fff",
            defaultHoverBg: "#fff",
            defaultHoverColor: "#009688",
            defaultHoverBorderColor: "#009688",
          },
        },
      }}
    >
      <div className="w-screen h-screen bg-indigo-50 flex justify-center items-center">
        <div className="w-[90%]  sm:w-[80%] md:w-2/3 h-[90%] relative ">
          <div className="h-[80%] gap-4 w-full bg-white md:w-2/3 md:px-20 lg:w-[50%] 2xl:w-[50%] p-4 flex flex-col justify-center items-center absolute mt-22 left-0 rounded-4xl shadow-2xl drop-shadow-xl z-10">
            <Form className="flex w-full gap-5 flex-col justify-center items-center" onFinish={onFinish}>
              <img src={logo} alt="" />
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
                <Input placeholder="Your Email here" />
              </Form.Item>

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
                  placeholder="Password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div className="w-full">
                {/* <button className="w-full transition-all hover:scale-103 bg-primary text-2xl font-medium text-white py-2 rounded-xl hover:bg-primary2">
                  Login
                </button> */}
                <Button htmlType="submit" size="large" className="w-full">
                  LOGIN
                </Button>
                <div className="mt-3">
                  <p className="text-md mt-2 text-gray-500 text-center">
                    Don't have an account yet?{" "}
                  </p>
                  <p className="text-md text-gray-500 text-center">
                    Sign up as{" "}
                    <span className="text-indigo-400 hover:text-teal-500">
                      <Link to="/register">
                        user
                      </Link>

                    </span>{" "}
                    /{" "}
                    <span className="text-indigo-400 hover:text-teal-500">
                      <Link to="/orgregister">
                        organisation
                      </Link>

                    </span>{" "}
                  </p>
                </div>
              </div>
            </Form>
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