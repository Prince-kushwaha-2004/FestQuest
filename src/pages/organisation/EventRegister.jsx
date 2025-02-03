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
      title: "Details",
    },
    {
      title: "Contact Links",
    },
    {
      title: "Event Dates",
    },
    {
      title: "Prizes",
    },
  ];
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex w-screen h-screen bg-white flex-col">
      <div className="flex flex-col justify-between w-full p-10">
        <Steps current={0} labelPlacement="vertical" items={items} />
      </div>
      <div>
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
  );
};

export default EventRegister;
