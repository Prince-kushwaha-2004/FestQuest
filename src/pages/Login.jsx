import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Axios from "../axios/Axios";
import bg1 from "../assets/bg10.jpeg";
import logo from "../assets/festLogo.png";
import { Regex } from "../utils/Constants";

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
            paddingBlock: 8,
            inputFontSize: 18,
            paddingInline: 10,
            activeBorderColor: "#009688",
            hoverBorderColor: "#009688",
          },
          Button: {
            defaultBg: "#00707c",
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
          <div className="h-[80%] w-full bg-white md:w-2/3 md:px-20 lg:w-[50%] 2xl:w-[50%] p-4 flex flex-col justify-center items-center absolute mt-22 left-0 rounded-4xl shadow-2xl drop-shadow-xl z-10">
            <img src={logo} alt="logo" className="mb-16" />
            <Form
              className="flex w-full gap-3 flex-col justify-center items-center"
              onFinish={onFinish}
              name="loginForm"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email",
                  },
                  {
                    pattern: Regex.emailRegex,
                    message: "Please enter a valid email",
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
                  },
                  {
                    pattern: Regex.passwordRegex,
                    message:
                      "Please include uppercase letter, lowercase letter, number and special character. The password should be 8-16 characters.",
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
                <Button htmlType="submit" size="large" className="w-full">
                  LOGIN
                </Button>
                <div className="mt-3">
                  <p className="text-md mt-2 text-gray-500 text-center">
                    Don't have an account yet?{" "}
                  </p>
                  <p className="text-md text-gray-500 text-center">
                    Sign up as{" "}
                    <span>
                      <Link to="/register">user</Link>
                    </span>{" "}
                    /{" "}
                    <span>
                      <Link to="/orgregister">organisation</Link>
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
