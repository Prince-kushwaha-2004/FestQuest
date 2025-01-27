import { Steps } from "antd";
import React from "react";

const StepwiseProcess = ({ logo, current, itemsArray }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex 2xl:[21rem]  xl:w-[19rem] lg:[18rem] md:[10rem] mb-15">
          <img src={logo} alt="" />
        </div>
        <div className="flex pl-6 ">
          <Steps current={current} direction="vertical" items={itemsArray} />
        </div>
      </div>
    </>
  );
};

export default StepwiseProcess;
