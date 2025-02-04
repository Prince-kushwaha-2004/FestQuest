import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import React from "react";

export const Basic = ({ formData, setFormData, current, setCurrent }) => {
  const { TextArea } = Input;

  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div className="md:mx-20">
      <Form name="form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="EVENT NAME"
          rules={[{ required: true, message: "Please enter the event name" }]}
        >
          <Input placeholder="Name of the event" />
        </Form.Item>

        <Form.Item
          name="tagline"
          label="TAGLINE"
          rules={[
            { required: true, message: "Please enter the event tagline" },
          ]}
        >
          <Input placeholder="A tagline for your event" />
        </Form.Item>

        <Form.Item
          name="description"
          label="DESCRIPTION"
          rules={[{ required: true, message: "Please describe the event" }]}
        >
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="About your event"
          />
        </Form.Item>

        <Form.Item
          name="banner"
          label="EVENT BANNER"
          valuePropName="fileList"
          getValueFromEvent={(e) => e?.fileList}
        >
          <Upload.Dragger style={{ backgroundColor: "white" }} name="bannerImg">
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: "teal" }} />
            </p>
            <p className="ant-upload-text">
              Click or drag Banner Image to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>

        <div className="flex justify-center">
          <Button size="large" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export const Details = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };
  return (
    <div className="md:mx-20">
      <Form name="form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="mode"
          size="large"
          label="MODE OF EVENT"
          rules={[
            { required: true, message: "Please select the mode of your event" },
          ]}
        >
          <Select placeholder="Select mode">
            <Select.Option value="online">Online</Select.Option>
            <Select.Option value="offline">Offline</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="total"
          label="APPROX. PARTICIPANTS"
          rules={[
            { required: true, message: "Please enter approx participants" },
          ]}
        >
          <Input type="number" placeholder="e.g. 200" />
        </Form.Item>

        <Form.Item
          name="min"
          label="MIN. TEAM SIZE ALLOWED"
          rules={[
            {
              required: true,
              message: "Please enter the minimum members required for a team",
            },
          ]}
        >
          <Input type="number" min={2} max={5} placeholder="e.g. 2" />
        </Form.Item>

        <Form.Item
          name="max"
          label="MAX. TEAM SIZE ALLOWED"
          rules={[
            {
              required: true,
              message: "Please enter the maximum members required for a team",
            },
          ]}
        >
          <Input type="number" min={4} max={15} placeholder="e.g. 4" />
        </Form.Item>

        <div className="flex justify-center">
          <Button
            color="cyan"
            variant="filled"
            style={{ marginRight: "16px" }}
            onClick={() => setCurrent(current - 1)}
            size="large"
          >
            Previous
          </Button>

          <Button htmlType="submit" size="large">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
