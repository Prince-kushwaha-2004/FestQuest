import { Steps } from "antd";
import React, { useState } from "react";
import { Basic, Details, Mode } from "../../components/StepForm/Form1";
import { Dates, Links, Prizes } from "../../components/StepForm/Form2";


const EventRegister = () => {
    const [form, setForm] = useState({
        name: "",
        address: "",
        Pincode: "",
        type: "",
        email: "",
        bio: "",
        password: "",
        confirmPassword: "",
    });

    const items = [
        {
            title: "Mode of Event",
        },
        {
            title: "Basics",
        },
        {
            title: "Register Details",
        },
        {
            title: "Contact Links",
        },
        {
            title: "Event Dates",
        },
        {
            title: "Waiting",
        },
    ];

    return (
        <div className="flex w-screen h-screen bg-white flex-col">
            <div className="flex flex-col justify-between w-full p-10">
                <Steps current={1} labelPlacement="vertical" items={items} />
            </div>
            <div>
                <Mode />
                <Basic />
                <Details />
                <Links />
                <Dates />
                <Prizes />
            </div>
        </div>
    );
};

export default EventRegister;