import { Button, ConfigProvider, Input } from "antd";

import React, { useState } from "react";
import HandleChange from "../utils/Function";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });

  const inputBoxStyle = {
    fontSize: "1.2rem",
    padding: "0.5rem 2rem",
    width: "50%",
  };
  const buttonStyle = {
    width: "20%",
    fontSize: "1rem",
    padding: "1.4rem 2rem",
    borderRadius: "1.3rem",
    fontWeight: "bold",
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              colorPrimary: "#1677ff",
              inputFontSizeLG: 24,
            },
          },
        }}
      >
        <div className="w-full justify-center h-screen flex items-center  bg-background p-16 ">
          <div className="drop-shadow-md static z-0 rounded-2xl self-center bg-white h-[90%] w-[93%] flex justify-end  ">
            <div className=" w-2/3">
              <div className="flex justify-end items-center px-5 font-semibold mt-[.5rem]  py-3 w-full">
                <div className="px-4 ">Already have an account? </div>
                <Button color="primary" variant="filled">
                  Sign in
                </Button>
              </div>

              <div className="flex justify-center text-3xl font-bold mt-[5rem] ">
                Create your free account
              </div>

              <div className="flex gap-4 mt-[4rem] flex-col items-center  justify-center">
                <Input
                  name="name"
                  value={registerForm.name}
                  onChange={(e) => HandleChange(e, setRegisterForm)}
                  style={{
                    width: inputBoxStyle.width,
                    padding: inputBoxStyle.padding,
                    fontSize: inputBoxStyle.fontSize,
                  }}
                  placeholder="Name"
                />
                <Input
                  name="email"
                  value={registerForm.email}
                  onChange={(e) => HandleChange(e, setRegisterForm)}
                  style={{
                    width: inputBoxStyle.width,
                    padding: inputBoxStyle.padding,
                    fontSize: inputBoxStyle.fontSize,
                  }}
                  placeholder="Email"
                />
                <Input
                  name="bio"
                  value={registerForm.bio}
                  onChange={(e) => HandleChange(e, setRegisterForm)}
                  style={{
                    width: inputBoxStyle.width,
                    padding: inputBoxStyle.padding,
                    fontSize: inputBoxStyle.fontSize,
                  }}
                  placeholder="Bio"
                />
                <Input
                  name="password"
                  value={registerForm.password}
                  onChange={(e) => HandleChange(e, setRegisterForm)}
                  style={{
                    width: inputBoxStyle.width,
                    padding: inputBoxStyle.padding,
                    fontSize: inputBoxStyle.fontSize,
                  }}
                  placeholder="Password"
                />
                <Input
                  name="confirmPassword"
                  value={registerForm.confirmPassword}
                  onChange={(e) => HandleChange(e, setRegisterForm)}
                  style={{
                    width: inputBoxStyle.width,
                    padding: inputBoxStyle.padding,
                    fontSize: inputBoxStyle.fontSize,
                  }}
                  placeholder="Confirm password"
                />
                <Button
                  color="primary"
                  variant="filled"
                  style={{
                    width: buttonStyle.width,
                    fontSize: buttonStyle.fontSize,
                    padding: buttonStyle.padding,
                    borderRadius: buttonStyle.borderRadius,
                    fontWeight: buttonStyle.fontWeight,
                  }}
                  onClick={(e) => console.log(registerForm)}
                >
                  SignUp
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 backdrop-sepia-50 opacity-40 z-10 bg-blue-800 h-full w-1/3  "></div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Register;
