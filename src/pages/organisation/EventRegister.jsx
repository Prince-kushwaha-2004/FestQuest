import { ConfigProvider, Steps } from "antd";
import { useState } from "react";
import { Basic, Details } from "../../components/StepForm/Form1";
import { Dates, Links, Prizes } from "../../components/StepForm/Form2";
const EventRegister = () => {
  const items = [
    {
      title: "Basics",
      heading: " Let's get you started!",
    },
    {
      title: "Event Details",
      heading: "Add some more event details",
    },
    {
      title: "Contact Links",
      heading: "Your contact links here",
    },
    {
      title: "Dates",
      heading: "Important dates...",
    },
    {
      title: "Prizes",
      heading: "The final step!",
    },
  ];
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);

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
            paddingInline: 24,
            paddingBlock: 36,
            defaultBg: "#009688",
            defaultColor: "#fff",
            defaultHoverBg: "#fff",
            defaultHoverColor: "#009688",
            defaultHoverBorderColor: "#009688",
          },
          Steps: {
            colorPrimary: "#009688",
            colorText: "#009688",
            colorTextDisabled: "#FFBF00",
            colorTextQuaternary: "#FFBF00",
            fontSize: 20,
            lineHeight: 6,
          },
          Select: {
            activeBorderColor: "#009688",
            hoverBorderColor: "#009688",
          },
        },
      }}
    >
      <div className="flex w-screen h-screen ps-28 xl:ps-4 bg-blue-50 flex-col">
        <div className="hidden md:flex flex-col justify-between w-full  pt-6">
          <Steps current={current} labelPlacement="vertical" items={items} />
        </div>
        <div className="h-full sm:m-8 flex justify-center">
          <div className="shadow-xl border bg-white border-slate-200 p-4 rounded-2xl sm:w-[85%] lg:w-[65%] xl:w-[55%] w-[95%]">
            <h1 className="font-bold mt-8 md:mt-4 mb-8 text-center text-4xl">
              {items[current].heading}
            </h1>

            {current === 0 && (
              <Basic
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 1 && (
              <Details
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 2 && (
              <Links
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 3 && (
              <Dates
                formData={formData}
                setFormData={setFormData}
                current={current}
                setCurrent={setCurrent}
              />
            )}
            {current === 4 && (
              <Prizes
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
  );
};

export default EventRegister;
