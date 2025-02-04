import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Space, Typography } from 'antd';
import en from 'antd/es/date-picker/locale/en_US';
import enUS from 'antd/es/locale/en_US';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import React from "react";
const onFinish = (values) => {
    console.log('Received values of form:', values);
}
dayjs.extend(buddhistEra);
const { Title } = Typography;
const buddhistLocale = {
    ...en,
    lang: {
        ...en.lang,
        fieldDateFormat: 'BBBB-MM-DD',
        fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
        yearFormat: 'BBBB',
        cellYearFormat: 'BBBB',
    },
};
const globalBuddhistLocale = {
    ...enUS,
    DatePicker: {
        ...enUS.DatePicker,
        lang: buddhistLocale.lang,
    },
};
const defaultValue = dayjs('2024-01-01');

const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};

export const Links = ({ formData, setFormData, current, setCurrent }) => {
    const onFinish = (value) => {
        console.log(value);
        setCurrent(current + 1)
    };
    return (
        <div className='md:mx-20'>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={['links']}>
                    <MyFormItem name="websiteUrl" label="HACKATHON WEBSITE URL">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="linkedin" label="LINKEDIN">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="instagram" label="INSTAGRAM">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="discord" label="DISCORD">
                        <Input />
                    </MyFormItem>
                </MyFormItemGroup>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export const Dates = ({ formData, setFormData, current, setCurrent }) => {
    const onChange = (_, dateStr) => {
        console.log('onChange:', dateStr);
    };
    const onFinish = (value) => {
        console.log(value);
        setCurrent(current + 1)
    };
    return (
        <div>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <Space direction="vertical" className='flex justify-center items-center w-full'>
                    <div className='flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120'>
                        <p>APPLICATION START</p>
                        <MyFormItem name="date1"
                            rules={[
                                {
                                    required: true,
                                    message: "Date is Required",
                                },
                            ]}>
                            <DatePicker
                                showTime
                                locale={buddhistLocale}
                                onChange={onChange}
                                size="large"
                            />
                        </MyFormItem>
                    </div>
                    <div className='flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120'>
                        <p>APPLICATION CLOSE</p>
                        <MyFormItem name="date2"
                            rules={[
                                {
                                    required: true,
                                    message: "Date is Required",
                                },
                            ]}>
                            <DatePicker
                                showTime
                                locale={buddhistLocale}
                                onChange={onChange}
                                size="large"
                            />
                        </MyFormItem>
                    </div>

                    <div className='flex items-center justify-between md:gap-4 gap-2 mt-16  md:w-110 flex-col md:flex-row lg:w-115 xl:w-120'>
                        <p>EVENT START</p>
                        <MyFormItem name="date3"
                            rules={[
                                {
                                    required: true,
                                    message: "Date is Required",
                                },
                            ]}>
                            <DatePicker
                                showTime
                                locale={buddhistLocale}
                                onChange={onChange}
                                size="large"
                            />
                        </MyFormItem>
                    </div>
                    <div className='flex items-center justify-between gap-2 md:gap-4 md:w-110 flex-col md:flex-row lg:w-115 xl:w-120'>
                        <p>EVENT CLOSE</p>
                        <MyFormItem name="date4"
                            rules={[
                                {
                                    required: true,
                                    message: "Date is Required",
                                },
                            ]}>
                            <DatePicker
                                showTime
                                locale={buddhistLocale}
                                onChange={onChange}
                                size="large"
                            />
                        </MyFormItem>
                    </div>

                </Space>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export const Prizes = ({ formData, setFormData, current, setCurrent }) => {
    return (
        <div className='flex justify-center'>
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
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'name']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing  name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'amount']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing amount',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="amount" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add Prizes
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
