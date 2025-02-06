import { ConfigProvider } from "antd";
import React, { useState } from "react";
import logo from "../../assets/festLogo.png";
import { Address, EmailVerify, OtpValidate, Password } from "../../components/StepForm/OrgRegister";
import StepwiseProcess from "../../components/StepwiseProcess";

const OrganisationRegister = () => {
  const items = [
    {
      title: "Step 1",
      description: "Basics",
    },
    {
      title: "Step 2",
      description: "OTP Confirmation",
    },
    {
      title: "Step 3",
      description: "About",
    },
    {
      title: "Step 4",
      description: "Final Step",
    },
  ];
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="w-full justify-center h-screen flex items-center bg-teal-400 md:p-10  ">
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
          <div className="absolute  flex-col lg:flex hidden justify-center inset-y-0 left-0 backdrop-invert backdrop-opacity-10  items-end z-10 bg-themeColor/10 h-full w-1/3  ">
            <div className="w-4/5 px-4">
              <StepwiseProcess
                logo={logo}
                itemsArray={items}
                current={current}
              />
            </div>
          </div>
          <div className="drop-shadow-md static z-0 rounded-2xl self-center bg-white shadow border border-slate-300   p-5 h-[90%] w-[94%] flex justify-end  ">
            <div className="flex flex-col justify-center items-center gap-20 lg:w-2/3 w-full">
              <div className="flex lg:hidden w-[20rem]">
                <img src={logo} alt="" />
              </div>

              <div className="flex justify-center  sm:text-4xl text-3xl font-bold text-[#009688] heading-primary ">
                Create your free account
              </div>

              <div className="flex  w-full gap-4 flex-col items-center justify-center *:w-[90%] md:*:w-[80%] xl:*:w-[50%] ">
                {current == 0 && (
                  <EmailVerify
                    formData={formData}
                    setFormData={setFormData}
                    current={current}
                    setCurrent={setCurrent}
                  />
                )}
                {current == 1 && (

                  <OtpValidate
                    formData={formData}
                    setFormData={setFormData}
                    current={current}
                    setCurrent={setCurrent}
                  />

                )}
                {current == 2 && (

                  <Password
                    formData={formData}
                    setFormData={setFormData}
                    current={current}
                    setCurrent={setCurrent}
                  />
                )}
                {current == 3 && (
                  <Address
                    formData={formData}
                    setFormData={setFormData}
                    current={current}
                    setCurrent={setCurrent}
                  />
                )}
              </div>


            </div>
          </div>
        </ConfigProvider>
      </div>
    </>
  );
};

export default OrganisationRegister;
