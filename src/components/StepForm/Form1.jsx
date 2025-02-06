import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import Axios from "../../axios/Axios";
import { Regex } from "../../utils/Constants";

const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
export const Basic = ({ formData, setFormData, current, setCurrent }) => {
  const { TextArea } = Input;
  const onFinish = (value) => {
    setFormData({ ...formData, basic: value });
    console.log(formData);
    setCurrent(current + 1);
  };
  return (
    <div className="md:mx-20">
      <Form
        name="form"
        layout="vertical"
        onFinish={onFinish}
        initialValues={formData.basic}
      >
        <Form.Item
          name="name"
          label="EVENT NAME"
          rules={[{ required: true, message: "Please enter the event name" }]}
        >
          <Input placeholder="Name of the event" />
        </Form.Item>

        <Form.Item
          name="description"
          label="DESCRIPTION"
          rules={[{ required: true, message: "Please describe the event" }]}
        >
          <TextArea showCount maxLength={100} placeholder="About your event" />
        </Form.Item>

        <Form.Item
          name="type"
          size="large"
          label="EVENT TYPE"
          rules={[{ required: true, message: "Please select the event type" }]}
        >
          <Select placeholder="Select type" size="large">
            <Select.Option value="sports">Sports</Select.Option>
            <Select.Option value="cultural">Cultural</Select.Option>
            <Select.Option value="fintech">FinTech</Select.Option>
            <Select.Option value="technical">Technical</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="banner"
          label="EVENT BANNER"
          rules={[
            {
              required: true,
              message: "Please select a banner for your event",
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

        <div className="flex justify-center my-3">
          <Button size="large" className="w-full" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export const Details = ({ formData, setFormData, current, setCurrent }) => {
  const [modeDropdown, setModeDropdown] = useState([])
  const onFinish = (value) => {
    setFormData({ ...formData, eventDetails: value });
    console.log(formData);
    setCurrent(current + 1);
  };
  const [mode, setMode] = useState(formData.mode);
  const changeMode = (mode) => {
    setMode(mode);
    setFormData({ ...formData, mode: mode });
  };
  const req = {
    apiName: "list/",
    method: "get",
    params: { "type": 1 }
  }
  useEffect(() => {
    Axios(req)
      .then((response) => {
        console.log(response.data.details)
        setModeDropdown(response.data.details)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="md:mx-20">
      <Form
        name="form"
        layout="vertical"
        initialValues={formData.eventDetails}
        onFinish={onFinish}
      >
        <Form.Item
          name="mode"
          size="large"
          label="MODE OF EVENT"
          rules={[
            { required: true, message: "Please select the mode of your event" },
          ]}
        >
          <Select placeholder="Select mode" onChange={changeMode} size="large">
            {modeDropdown.map((value) => <Select.Option key={value.id} value={value.id}>{value.value}</Select.Option>)}

          </Select>
        </Form.Item>
        {mode == "online" && (
          <Form.Item
            name="url"
            label="EVENT WEBSITE URL"
            rules={[
              {
                required: true,
                message: "Please the URL of your event website",
              },
              {
                pattern: Regex.urlRegex,
                message: "Please enter a valid url",
              },
            ]}
          >
            <Input placeholder="URL for the event" />
          </Form.Item>
        )}

        {mode == "offline" && (
          <>
            <div className="flex flex-row justify-between">
              <Form.Item
                name="state"
                size="large"
                label="STATE"
                style={{ width: "40%", marginRight: "10px" }}
                rules={[{ required: true, message: "Please select state" }]}
              >
                <Select placeholder="Select state" size="large">
                  <Select.Option value="UP">UP</Select.Option>
                  <Select.Option value="MP">MP</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="city"
                size="large"
                label="CITY"
                style={{ width: "40%" }}
                rules={[{ required: true, message: "Please select city" }]}
              >
                <Select placeholder="Select city" size="large">
                  <Select.Option value="ghaziabad">Ghaziabad</Select.Option>
                  <Select.Option value="gurgaon">Gurgaon</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="pin"
              label="PINCODE"
              maxLength={6}
              rules={[
                {
                  required: true,
                  message: "Please enter the pincode",
                },
              ]}
            >
              <Input type="number" placeholder="Enter pincode" />
            </Form.Item>

            <Form.Item
              name="address"
              label="EVENT ADDRESS"
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input placeholder="Enter address" />
            </Form.Item>
          </>
        )}

        <div className="flex flex-row  gap-2 justify-between">
          <Form.Item
            name="min_participants_per_team"
            label="MIN. TEAM SIZE"
            rules={[
              {
                required: true,
                message: "Please enter the minimum members required for a team",
              },
            ]}
          >
            <Input type="number" min={2} placeholder="e.g. 2" />
          </Form.Item>

          <Form.Item
            name="max_participants_per_team"
            label="MAX. TEAM SIZE"
            rules={[
              {
                required: true,
                message: "Please enter the maximum members required for a team",
              },
            ]}
          >
            <Input type="number" min={2} placeholder="e.g. 4" />
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
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
