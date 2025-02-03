import { Steps } from "antd";
import { useState } from "react";
import { Basic, Details } from "../../components/StepForm/Form1";
import { Dates, Links, Prizes } from "../../components/StepForm/Form2";

const EventRegister = () => {
  const items = [
    {
      title: "Basics",
    },
    {
      title: "Event Details",
    },
    {
      title: "Contact Links",
    },
    {
      title: "Dates",
    },
    {
      title: "Prizes",
    },
  ];
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex w-screen h-screen ps-28 xl:ps-4 bg-blue-50 flex-col">
      <div className="hidden md:flex flex-col justify-between w-full  pt-6">
        <Steps current={current} labelPlacement="vertical" items={items} />
      </div>
      <div className="h-full sm:m-8 flex justify-center">
        <div className="shadow-xl border bg-white border-slate-200 p-4 rounded-2xl sm:w-[85%] lg:w-[65%] xl:w-[55%] w-[95%]">
          <h1 className="font-bold mt-8 md:mt-4 text-center text-5xl">
            Let's get you started!
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
  );
};

export default EventRegister;
