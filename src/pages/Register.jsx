import { ConfigProvider } from "antd";
import { useState } from "react";
import logo from "../assets/festLogo.png";
import { Basic, Final, OTP } from "../components/StepForm/UserRegister";
import StepwiseProcess from "../components/StepwiseProcess";
const Register = () => {
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);

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
      description: "Final Details",
    },
  ];

  return (
    <div className="w-full justify-center h-screen flex items-center bg-teal-500 md:p-10">
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
            Steps: {
              colorPrimary: "#009688",
              colorText: "#009688",
              fontSize: 20,
              lineHeight: 6,
            },
            Select: {
              activeBorderColor: "#009688",
              hoverBorderColor: "#009688",
            },
            RangePicker: {
              activeBorderColor: "#009688",
              hoverBorderColor: "#009688",
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
        <div className="drop-shadow-md static z-0 rounded-2xl self-center shadow-xl bg-white h-[90%] w-[94%] flex justify-end">
          <div className="flex flex-col justify-center items-center lg:w-2/3 w-full">
            <div className="flex lg:hidden w-2/3">
              <img src={logo} alt="logo" />
            </div>

            <div className="flex justify-center sm:text-4xl mb-20 text-3xl font-bold text-[#009688] font-serif">
              Create Your Free Account
            </div>
            {current === 0 && (
              <Basic
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 1 && (
              <OTP
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 2 && (
              <Final
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}

            <div className="flex justify-center items-center mt-3">
              <p className="text-md text-gray-500 text-center">
                Already have an account?{" "}
                <span className="text-indigo-400 hover:text-teal-500">
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Register;
