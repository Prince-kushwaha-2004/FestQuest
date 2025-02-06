import { Steps } from "antd";
import React from "react";

const StepwiseProcess = ({ logo, current, itemsArray }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex mb-10 w-80  ">
          <img src={logo} alt="" />
        </div>
        <div className="flex pl-6">
          <Steps current={current} direction="vertical" items={itemsArray} />
        </div>
      </div>
    </>
  );
};

export default StepwiseProcess;
