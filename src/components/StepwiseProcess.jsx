import { Steps } from "antd";
import React from 'react';


const StepwiseProcess = ({ logo, current }) => {
    return (
        <>
            <div className="flex flex-col justify-between">
                <div className="flex 2xl:[21rem]  xl:w-[19rem] lg:[18rem] md:[10rem] mb-15">
                    <img src={logo} alt="" />
                </div>
                <div className="flex pl-4 ">
                    <Steps
                        current={current}
                        direction="vertical"
                        items={[
                            {
                                title: "Email verification",
                                description: "Email verification",
                            },
                            {
                                title: "Step 2",
                                description: "OTP confirmation",
                            },
                            {
                                title: "Step 3",
                                description: "Password",
                            },
                            {
                                title: "Step 4",
                                description: "Address",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default StepwiseProcess