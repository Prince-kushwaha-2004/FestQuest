import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Axios from "../../axios/Axios";
import { Regex } from "../../utils/Constants";

const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
export const EmailVerify = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    console.log(value);
    setFormData({ ...formData, basic: value });
    const req = {
      apiName: "test",
      method: "post",
      dataObject: value,
    };
    Axios(req)
      .then((response) => {
        console.log(response);
        toast.success(response?.data?.message);
        setCurrent(current + 1);
      })
      .catch((error) => {
        console.log(error);
        setCurrent(current + 1);
        toast.error(error?.response?.data?.message);
      });
  };
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
          { required: true, message: "Please enter the organisation name" },
          {
            pattern: Regex.nameRegex,
            message: "Please enter a valid name",
          },
        ]}
      >
        <Input placeholder="Enter name here" />
      </Form.Item>
      <Form.Item
        name="orgType"
        size="large"
        label="ORGANISATION TYPE"
        rules={[
          { required: true, message: "Please select the organisation type" },
        ]}
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
          { required: true, message: "Please enter the email" },
          {
            pattern: Regex.emailRegex,
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input placeholder="Enter email here" type="email" />
      </Form.Item>

      <Button size="large" className="w-full mt-2" htmlType="submit">
        Next
      </Button>
      <div className="flex justify-center items-center mt-1">
        <p className="text-md text-gray-800 text-center">
          Already have an account?{" "}
          <span className="text-indigo-400 hover:text-teal-500">
            {" "}
            <Link to="/login">Sign In</Link>
          </span>{" "}
        </p>
      </div>
    </Form>
  );
};

export const OtpValidate = ({ formData, setFormData, current, setCurrent }) => {
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
    setTime(30);
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  };
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
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
        <Input.OTP {...sharedProps} size="large" />
      </Form.Item>
      <div className="flex justify-center my-3 mt-16">
        {time ? (
          <p className="mx-4 my-auto text-xl flex w-full gap-4">
            <span>Resend OTP :</span>{" "}
            <span>
              {" "}
              {`${Math.floor(time / 60)}`.padStart(2, 0)}:
              {`${Math.ceil(time % 60)}`.padStart(2, 0)}
            </span>
          </p>
        ) : (
          <Button
            color="cyan"
            variant="filled"
            style={{ marginRight: "16px", width: "50%" }}
            onClick={resendOtp}
            size="large"
          >
            Resend OTP
          </Button>
        )}

        <Button htmlType="submit" size="large" style={{ width: "50%" }}>
          Verify
        </Button>
      </div>
    </Form>
  );
};

export const Password = ({ formData, setFormData, current, setCurrent }) => {
  const { TextArea } = Input;
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
    setFormData({ ...formData, orgDetails: value });
  };
  return (
    <Form
      name="password"
      layout="vertical"
      initialValues={formData.orgDetails}
      onFinish={onFinish}
    >
      <Form.Item name="bio" label="BIO">
        <TextArea
          showCount
          maxLength={100}
          placeholder="About your organisation"
        />
      </Form.Item>
      <div className="w-full flex gap-3 *:w-1/2">
        <Form.Item
          name="coverImage"
          label="COVER IMAGE"
          rules={[
            {
              required: true,
              message: "Please select a banner",
            },
            () => ({
              async validator(_, value) {
                if (value) {
                  const isImage = validImageTypes.includes(value.file.type);
                  if (isImage) {
                    return Promise.resolve;
                  } else {
                    return Promise.reject("Invalid file format, not an image");
                  }
                }
              },
            }),
          ]}
        >
          <Upload
            listType="picture"
            maxCount={1}
            accept="image/*"
            beforeUpload={() => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />} size="large" block>
              Upload Banner
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="logo"
          label="LOGO"
          rules={[
            {
              required: true,
              message: "Please select a logo",
            },
            () => ({
              async validator(_, value) {
                if (value) {
                  const isImage = validImageTypes.includes(value.file.type);
                  if (isImage) {
                    return Promise.resolve;
                  } else {
                    return Promise.reject("Invalid file format, not an image");
                  }
                }
              },
            }),
          ]}
        >
          <Upload
            listType="picture"
            maxCount={1}
            accept="image/*"
            beforeUpload={() => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />} size="large" block>
              Upload Logo
            </Button>
          </Upload>
        </Form.Item>
      </div>
      <Button size="large" className="w-full mt-2" htmlType="submit">
        Next
      </Button>
    </Form>
  );
};

export const Address = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    setFormData({ ...formData, address: value });
    console.log(JSON.stringify(formData));
  };
  return (
    <Form
      name="password"
      layout="vertical"
      initialValues={formData.address}
      onFinish={onFinish}
    >
      <div className="w-full flex gap-2 *:w-1/2">
        <Form.Item
          name="state"
          size="large"
          label="STATE"
          rules={[{ required: true, message: "Please select state" }]}
        >
          <Select placeholder="Select state" size="large">
            <Select.Option value="sports">School</Select.Option>
            <Select.Option value="cultural">Organisation</Select.Option>
            <Select.Option value="fintech">other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          size="large"
          label="CITY"
          rules={[{ required: true, message: "Please select city" }]}
        >
          <Select placeholder="Select city" size="large">
            <Select.Option value="sports">School</Select.Option>
            <Select.Option value="cultural">Organisation</Select.Option>
            <Select.Option value="fintech">other</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item
        name="name"
        label="ADDRESS"
        rules={[{ required: true, message: "Please enter your address" }]}
      >
        <Input placeholder="Your address here" />
      </Form.Item>
      <Form.Item
        name="pincode"
        label="PIN CODE"
        rules={[{ required: true, message: "Please enter pincode" }]}
      >
        <Input placeholder="Pincode here" type="number" maxLength={6} />
      </Form.Item>

      <div className="w-full flex gap-3 *:w-1/2">
        <Form.Item
          name="password"
          label="PASSWORD"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
            {
              pattern: Regex.passwordRegex,
              message:
                "Please include an uppercase & lowercase letter, number and special character here (8-16).",
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
            {
              pattern: Regex.passwordRegex,
              message:
                "Please include an uppercase & lowercase letter, number and special character here (8-16).",
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
      </div>
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
          Register
        </Button>
      </div>
    </Form>
  );
};
