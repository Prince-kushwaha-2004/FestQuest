import { Button, ConfigProvider, Input, Select, Steps } from "antd";

import React, { useEffect, useState } from "react";
import logo from "../../assets/festLogo.png";
import Axios from "../../axios/Axios";
import HandleChange from "../../utils/Function";

const OrganisationRegister = () => {

    const [registerForm, setRegisterForm] = useState({
        name: "",
        address: '',
        Pincode: '',
        type: '',
        email: "",
        bio: "",
        password: "",
        confirmPassword: "",
    });

    const [next, setNextState] = useState(0)

    const getOTP = () => {
        const request = {
            method: "POST",
            dataObject: registerForm,
        };
        Axios(request).then((res) => {
            console.log(res);
        });
    };

    const [current, setCurrent] = useState(0);
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };

    useEffect(() => { }, []);
    const description = "This is a description.";
    const sharedProps = {
        onChange,
        onInput,
    };

    const items = [
        {
            key: '1',
            label: "School",
        },
        {
            key: '2',
            label: "College",
        },
        {
            key: '3',
            label: "Other",
        },
    ];

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            colorPrimary: "#1677ff",
                            inputFontSizeLG: 24,
                            size: "middle",
                            paddingBlock: 7,
                            inputFontSize: 18,
                            paddingInline: 16,
                            activeBorderColor: "#00637C",
                            hoverBorderColor: "#FFBF61",
                        },
                        Button: {
                            paddingInline: 29,
                            paddingBlock: 36,
                            defaultBg: '#00637C'

                        },
                        Steps: {
                            colorPrimary: '#00637C',
                            colorText: "#000",
                            colorTextDisabled: "#FFBF00",
                            colorTextQuaternary: "#FFBF00",
                            fontSize: 20,
                            lineHeight: 4
                        },
                        Select: {
                            activeBorderColor: "#00637C",
                            hoverBorderColor: "#FFBF61",

                        }
                    },
                }}
            >
                <div className="w-full justify-center h-screen flex items-center  bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] p-18 ">
                    <div className="drop-shadow-md static z-0 rounded-2xl self-center bg-white h-[90%] w-[93%] flex justify-end  ">

                        <div className="flex flex-col justify-between  items-center  w-2/3">




                            <div className="flex justify-center text-4xl font-bold text-themeColor mt-30">
                                Create your free account
                            </div>

                            {current == 0 ? <div className="flex w-fit gap-4  flex-col items-center  justify-center">
                                <Input
                                    name="name"
                                    value={registerForm.name}
                                    onChange={(e) => HandleChange(e, setRegisterForm)}

                                    placeholder="Name"
                                />
                                <Select
                                    defaultValue="Organisation Type"
                                    size="large"
                                    style={{
                                        width: '100%',
                                    }}
                                    options={[
                                        {
                                            value: 'School',
                                            label: 'School',
                                        },
                                        {
                                            value: 'Organisation',
                                            label: 'College',
                                        },
                                        {
                                            value: 'other',
                                            label: 'Other',
                                        }

                                    ]}
                                />


                                <Input
                                    name="email"
                                    value={registerForm.email}
                                    onChange={(e) => HandleChange(e, setRegisterForm)}

                                    placeholder="Email"
                                />

                                <button
                                    onClick={(e) => {
                                        setCurrent(1);
                                    }}
                                    className="w-md bg-primary text-xl font-semibold text-white py-2 rounded-xl hover:bg-primary2"
                                >
                                    Next
                                </button>
                            </div>
                                : current == 1 ?
                                    <div className="flex w-fit gap-4  flex-col items-center  justify-center">

                                        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />

                                        <div className="mt-14">
                                            <button
                                                onClick={(e) => setCurrent(2)}
                                                className="w-md bg-primary text-xl font-semibold text-white py-2 rounded-xl hover:bg-primary2"
                                            >
                                                Next
                                            </button>

                                        </div>
                                    </div> :
                                    current == 2 ? <div className="flex w-fit gap-4  flex-col   justify-center">

                                        <Input name='password' value={registerForm.password} onChange={e => HandleChange(e, setRegisterForm)} placeholder="Password" />
                                        <Input name='confirmPassword' value={registerForm.confirmPassword} onChange={e => HandleChange(e, setRegisterForm)} placeholder="Confirm password" />

                                        <button
                                            onClick={(e) => setCurrent(3)}
                                            className="w-md bg-primary text-xl font-semibold text-white py-2 rounded-xl hover:bg-primary2"
                                        >
                                            next
                                        </button>
                                    </div> : current == 3 ? <div className="flex w-fit gap-4  flex-col   justify-center">

                                        <Input
                                            name="address"
                                            value={registerForm.address}
                                            onChange={(e) => HandleChange(e, setRegisterForm)}

                                            placeholder="address"
                                        />
                                        <Input
                                            name="Pincode"
                                            value={registerForm.Pincode}
                                            onChange={(e) => HandleChange(e, setRegisterForm)}

                                            placeholder="Pincode"
                                        />
                                        <Select
                                            defaultValue="City"
                                            size="large"
                                            style={{ width: '100%' }}

                                            options={[
                                                {
                                                    value: 'School',
                                                    label: 'School',
                                                },
                                                {
                                                    value: 'Organisation',
                                                    label: 'Organisation',
                                                },
                                                {
                                                    value: 'other',
                                                    label: 'Other',
                                                }

                                            ]}
                                        />
                                        <Select
                                            defaultValue="State"
                                            size="large"
                                            style={{ width: '100%' }}

                                            options={[
                                                {
                                                    value: 'School',
                                                    label: 'School',
                                                },
                                                {
                                                    value: 'Organisation',
                                                    label: 'Organisation',
                                                },
                                                {
                                                    value: 'other',
                                                    label: 'Other',
                                                }

                                            ]}
                                        />

                                        <button
                                            onClick={(e) => setCurrent(3)}
                                            className="w-md bg-primary text-xl font-semibold text-white py-2 rounded-xl hover:bg-primary2"
                                        >
                                            Sign Up
                                        </button>
                                    </div> : <></>

                            }

                            <div className="flex  justify-center items-center px-8 mb-10 font-semibold  w-full">
                                <div className="px-4   ">Already have an account? </div>



                                <Button color="default" variant="filled">
                                    Sign in
                                </Button>

                            </div>



                        </div>




                    </div>
                    <div className="absolute flex flex-col inset-y-0 left-0 backdrop-invert backdrop-opacity-10  items-end z-10 bg-themeColor/10 h-full w-1/3  ">
                        <div className="w-1/3"></div>

                        <div className=" w-2/3 mt-[10rem] mr-8 ">




                            <div className="flex ml-7 w-[20rem]  ">

                                <img src={logo} alt="" />
                            </div>




                            <div className="flex pl-15 mt-20 items-center justify-center ">
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
                    </div>
                </div>
            </ConfigProvider >
        </>
    );
};



export default OrganisationRegister