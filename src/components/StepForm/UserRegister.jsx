import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";


export const Basic = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    setFormData({ ...formData, basic: value });
    console.log(formData);
    setCurrent(current + 1);
  };
  return (
    <Form
      name="form"
      layout="vertical"
      onFinish={onFinish}
      initialValues={formData.basic}
      className="flex md:w-2/3 w-full gap-4 flex-col items-center justify-center"
    >
      <Form.Item
        name="name"
        label="NAME"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
        className="w-full"
      >
        <Input placeholder="Your Name here" />
      </Form.Item>

      <Form.Item
        name="email"
        label="EMAIL"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email",
          },
        ]}
        className="w-full"
      >
        <Input placeholder="Your Email here" />
      </Form.Item>
      <Button size="large" className="w-full" htmlType="submit">
        Next
      </Button>
    </Form>
  );
};

export const OTP = ({ formData, setFormData, current, setCurrent }) => {
  const [time, setTime] = useState(30);
  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 0.5;
      });
    }, 1000);
  }, []);

  const resendOtp = () => {
    setTime(30)
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
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
        {time ?
          <p className="mx-4 my-auto text-xl flex w-full gap-4">
            <span>Resend OTP :</span> <span> {`${Math.floor(time / 60)}`.padStart(2, 0)}:
              {`${Math.ceil(time % 60)}`.padStart(2, 0)}</span>
          </p>
          :
          <Button
            color="cyan"
            variant="filled"
            style={{ marginRight: "16px", width: "50%" }}
            onClick={resendOtp}
            size="large"
          >
            Resend OTP
          </Button>
        }


        <Button htmlType="submit" size="large" style={{ width: "50%" }}>
          Verify
        </Button>
      </div>
    </Form>
  )
}

export const Final = ({ formData, setFormData }) => {
  const onFinish = (value) => {
    setFormData({ ...formData, final: value });
    console.log(formData);
  };

  const handleFinalSubmit = async () => {
    try {
      console.log("Final Registration Data:", formData);
      message.success("Registration Successful!");
    } catch (errorInfo) {
      message.error("Please complete all fields correctly");
    }
  };

  return (
    <Form
      name="form"
      layout="vertical"
      onFinish={onFinish}
      initialValues={formData.final}
      className="flex md:w-2/3 w-full gap-4 flex-col items-center justify-center"
    >
      <Form.Item
        name="gender"
        className="w-full"
        size="large"
        label="GENDER"
        rules={[{ required: true, message: "Please select your gender" }]}
      >
        <Select placeholder="Select gender" size="large">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="password"
        label="PASSWORD"
        rules={[
          {
            required: true,
            message: "Please input your password",
            min: 8,
            max: 16,
          },
        ]}
        className="w-full"
      >
        <Input.Password
          name="password"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="CONFIRM PASSWORD"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password",
          },
        ]}
        className="w-full"
      >
        <Input.Password
          name="confirmPassword"
          placeholder="Confirm Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Button
        htmlType="submit"
        onClick={handleFinalSubmit}
        size="large"
        className="w-full"
      >
        Register
      </Button>
    </Form>
  );
};
