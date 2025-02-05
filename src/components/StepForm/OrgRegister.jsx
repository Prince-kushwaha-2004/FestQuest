import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../../axios/Axios";
import { Regex } from "../../utils/Constants";


export const EmailVerify = ({ formData, setFormData, current, setCurrent }) => {

    const onFinish = (value) => {
        console.log(value)
        setFormData({ ...formData, "basic": value })
        const req = {
            apiName: "test",
            method: "post",
            dataObject: value,
        }
        Axios(req)
            .then((response) => {
                console.log(response)
                toast.success(response.data.message)
                setCurrent(current + 1)
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.message)
            })

    }
    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={formData.basic}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                label="NAME"
                rules={[
                    { required: true, message: "Please enter the event name" },
                    {
                        pattern: Regex.nameRegex,
                        message: "Please enter a valid name",
                    },
                ]}
            >
                <Input placeholder="Name of the event" />
            </Form.Item>
            <Form.Item
                name="orgType"
                size="large"
                label="ORGANISATION TYPE"
                rules={[{ required: true, message: "Please select the Organisation type" }]}
            >
                <Select placeholder="Select type" size="large">
                    <Select.Option value="sports">School</Select.Option>
                    <Select.Option value="cultural">Organisation</Select.Option>
                    <Select.Option value="fintech">other</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="email"
                label="EMAIL"
                rules={[
                    { required: true, message: "Please enter email" },
                    {
                        pattern: Regex.emailRegex,
                        message: "Please enter a valid email",
                    },
                ]}

            >
                <Input placeholder="Name of the event" type="email" />
            </Form.Item>

            <Button size="large" style={{ width: "100%" }} htmlType="submit">
                Next
            </Button>
        </Form>
    )
}

export const OtpValidate = ({ formData, setFormData, current, setCurrent }) => {
    const [time, setTime] = useState(300);
    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    return 0;
                } else return time - 1;
            });
        }, 1000);
    }, []);
    const resendOtp = () => {
        window.location.reload()
    }
    const onFinish = (value) => {
        console.log(value)
        setCurrent(current + 1)
    }
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };
    const Completionist = () => <Button
        color="cyan"
        variant="filled"
        style={{ marginRight: "16px", width: "50%" }}
        onClick={resendOtp}
        size="large"
    >
        Resend OTP
    </Button>;

    return (
        <Form
            name="form"
            layout="vertical"
            initialValues={formData.basic}
            onFinish={onFinish}
        >
            <Form.Item
                name="otp"
                label="OTP"
                rules={[{ required: true, message: "Please enter OTP" }]}
                className="flex justify-center"
            >
                <Input.OTP  {...sharedProps} size="large" />
            </Form.Item>
            <div className="flex justify-center my-3 mt-16">
                <p>
                    Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                    {`${time % 60}`.padStart(2, 0)}
                </p>

                <Button htmlType="submit" size="large" style={{ width: "50%" }}>
                    Verify
                </Button>
            </div>
        </Form>
    )
}

export const Password = ({ formData, setFormData, current, setCurrent }) => {
    const onFinish = (value) => {
        console.log(value)
        setCurrent(current + 1)
    }
    return (
        <Form
            name="password"
            layout="vertical"
            initialValues={formData.basic}
            onFinish={onFinish}
        >
            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please enter password" }]}
            >
                <Input placeholder="password" />
            </Form.Item>
            <Form.Item
                name="confirmpass"
                label="Confirm password"
                rules={[{ required: true, message: "Please enter the event name" }]}
            >
                <Input placeholder="Name of the event" />
            </Form.Item>

            <div className="flex justify-center my-3">
                <Button
                    color="cyan"
                    variant="filled"
                    style={{ marginRight: "16px", width: "50%" }}
                    onClick={() => setCurrent(current - 1)}
                    size="large"
                >
                    Previous
                </Button>

                <Button htmlType="submit" size="large" style={{ width: "50%" }}>
                    Next
                </Button>
            </div>
        </Form>
    )
}

export const Address = ({ formData, setFormData, current, setCurrent }) => {
    const onFinish = (value) => {
        console.log(value)
        setCurrent(current + 1)
    }
    return (
        <Form
            name="password"
            layout="vertical"
            initialValues={formData.basic}
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                label="Address"
                rules={[{ required: true, message: "Please enter the event name" }]}
            >
                <Input placeholder="Name of the event" />
            </Form.Item>
            <Form.Item
                name="name"
                label="Pincode"
                rules={[{ required: true, message: "Please enter the event name" }]}
            >
                <Input placeholder="Name of the event" />
            </Form.Item>

            <Form.Item
                name="type"
                size="large"
                label="State"
                rules={[{ required: true, message: "Please select the Organisation type" }]}
            >
                <Select placeholder="Select type" size="large">
                    <Select.Option value="sports">School</Select.Option>
                    <Select.Option value="cultural">Organisation</Select.Option>
                    <Select.Option value="fintech">other</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="type"
                size="large"
                label="City"
                rules={[{ required: true, message: "Please select the Organisation type" }]}
            >
                <Select placeholder="Select type" size="large">
                    <Select.Option value="sports">School</Select.Option>
                    <Select.Option value="cultural">Organisation</Select.Option>
                    <Select.Option value="fintech">other</Select.Option>
                </Select>
            </Form.Item>

            <div className="flex justify-center my-3">
                <Button
                    color="cyan"
                    variant="filled"
                    style={{ marginRight: "16px", width: "50%" }}
                    onClick={() => setCurrent(current - 1)}
                    size="large"
                >
                    Previous
                </Button>

                <Button htmlType="submit" size="large" style={{ width: "50%" }}>
                    Next
                </Button>
            </div>
        </Form>
    )
}