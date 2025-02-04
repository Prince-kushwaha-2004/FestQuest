import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, Input, Select } from "antd";

export const Basic = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };

  const { TextArea } = Input;

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div className="mx-20">
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
          <Upload.Dragger style={{ backgroundColor: "white" }} name="files">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag Banner Image to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>

        <div className="flex justify-center">
          <Button type="primary" htmlType="submit">
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
    <div className="mx-20">
      <Form name="form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="mode"
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
          <Input type="number" min={4} max={6} placeholder="e.g. 4" />
        </Form.Item>

        <div className="flex justify-center">
          <Button
            color="cyan"
            variant="filled"
            style={{ marginRight: "16px" }}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </Button>

          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
