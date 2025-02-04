import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space, Typography } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import React from "react";

dayjs.extend(buddhistEra);

const buddhistLocale = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

export const Links = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };
  return (
    <div className="md:mx-20">
      <Form name="form" layout="vertical" onFinish={onFinish}>
        <Form.Item name="websiteUrl" label="HACKATHON WEBSITE URL">
          <Input placeholder="Name of the event" />
        </Form.Item>

        <Form.Item name="linkedin" label="LINKEDIN">
          <Input placeholder="A tagline for your event" />
        </Form.Item>

        <Form.Item name="instagram" label="INSTAGRAM">
          <Input placeholder="A tagline for your event" />
        </Form.Item>

        <Form.Item name="discord" label="DISCORD">
          <Input placeholder="A tagline for your event" />
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

export const Dates = ({ formData, setFormData, current, setCurrent }) => {
  const onChange = (_, dateStr) => {
    console.log("onChange:", dateStr);
  };
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };

  return (
    <div className="md:mx-20">
      <Form name="form" onFinish={onFinish}>
        <Space
          direction="vertical"
          className="flex justify-center items-center w-full"
        >
          <div className="flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120">
            <p>APPLICATION START</p>
            <Form.Item
              name="date1"
              rules={[
                {
                  required: true,
                  message: "Date is Required",
                },
              ]}
            >
              <DatePicker
                showTime
                locale={buddhistLocale}
                onChange={onChange}
                size="large"
              />
            </Form.Item>
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120">
            <p>APPLICATION CLOSE</p>
            <Form.Item
              name="date2"
              rules={[
                {
                  required: true,
                  message: "Date is Required",
                },
              ]}
            >
              <DatePicker
                showTime
                locale={buddhistLocale}
                onChange={onChange}
                size="large"
              />
            </Form.Item>
          </div>

          <div className="flex items-center justify-between md:gap-4 gap-2 mt-16  md:w-110 flex-col md:flex-row lg:w-115 xl:w-120">
            <p>EVENT START</p>
            <Form.Item
              name="date3"
              rules={[
                {
                  required: true,
                  message: "Date is Required",
                },
              ]}
            >
              <DatePicker
                showTime
                locale={buddhistLocale}
                onChange={onChange}
                size="large"
              />
            </Form.Item>
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120">
            <p>EVENT CLOSE</p>
            <Form.Item
              name="date4"
              rules={[
                {
                  required: true,
                  message: "Date is Required",
                },
              ]}
            >
              <DatePicker
                showTime
                locale={buddhistLocale}
                onChange={onChange}
                size="large"
              />
            </Form.Item>
          </div>
        </Space>
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

export const Prizes = ({ formData, setFormData, current, setCurrent }) => {
  const onFinish = (value) => {
    console.log(value);
    setCurrent(current + 1);
  };
  return (
    <div className="md:mx-20">
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.List name="prizes">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[
                      {
                        required: true,
                        message: "Please enter name of the track",
                      },
                    ]}
                  >
                    <Input placeholder="name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "prize"]}
                    rules={[
                      {
                        required: true,
                        message: "Please enter the prize",
                      },
                    ]}
                  >
                    <Input placeholder="prize" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Prizes
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
