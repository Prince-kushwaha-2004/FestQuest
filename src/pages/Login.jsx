import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../assets/bg10.jpeg";
import logo from "../assets/festLogo.png";
import Axios from "../axios/Axios";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { setTokens, setUser } = useAuthStore();

  const onFinish = async (values) => {
    try {
      const response = await Axios({
        apiName: "/login",
        method: "POST",
        dataObject: values,
        contentType: "application/json",
      });

      const { access_token, refresh_token, user } = response.data;
      setTokens(access_token, refresh_token);
      setUser(user);

      message.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      message.error("Network error. Please check your connection");
    }
  };

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
        <div className="w-[90%] sm:w-[80%] md:w-2/3 h-[90%] relative">
          <div className="h-[80%] gap-4 w-full bg-white md:w-2/3 md:px-20 lg:w-[50%] 2xl:w-[50%] p-4 flex flex-col justify-center items-center absolute mt-22 left-0 rounded-4xl shadow-2xl drop-shadow-xl z-10">
            <Form
              className="flex w-full gap-5 flex-col justify-center items-center"
              onFinish={onFinish}
              name="loginForm"
            >
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

                <p className="text-gray-500 mb-2">Don't have an account yet?</p>
                <p className="text-gray-500">
                  Sign up as{" "}
                  <Link
                    to="/register"
                    className="text-indigo-400 hover:text-teal-500"
                  >
                    user
                  </Link>{" "}
                  /{" "}
                  <Link
                    to="/orgregister"
                    className="text-indigo-400 hover:text-teal-500"
                  >
                    organisation
                  </Link>
                </p>
              </div>
            </Form>
          </div>

          <div className="h-full hidden md:flex justify-center items-center md:w-2/3 lg:w-3/5 absolute top-0 overflow-hidden right-0 rounded-4xl shadow-[-1px_10px_20px_1px_#666666]">
            <img
              src={bg1}
              alt="Background"
              className="absolute z-1 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Login;