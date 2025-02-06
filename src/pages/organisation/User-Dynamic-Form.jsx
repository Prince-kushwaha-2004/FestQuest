import { ConfigProvider, Form, Modal, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
const UserDynamicForm = () => {

    const [dynamicForm, setDynamicForm] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const description = "This is a description.";

    const [form] = Form.useForm();
    const variant = Form.useWatch("variant", form);

    const onChange = (e) => {
        console.log("Change:", e.target.value);
    };
    const [optionField, setOptionField] = useState(0)
    return (

        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorPrimary: "#009688",
                        inputFontSizeLG: 24,
                        size: "middle",
                        paddingBlock: 10,
                        inputFontSize: 18,
                        paddingInline: 15,
                        activeBorderColor: "#009688",
                        hoverBorderColor: "#009688",
                    },
                    Button: {
                        paddingInline: 24,
                        paddingBlock: 36,
                        defaultBg: "#009688",
                        defaultColor: "#fff",
                        defaultHoverBg: "#fff",
                        defaultHoverColor: "#009688",
                        defaultHoverBorderColor: "#009688",
                    },
                    Steps: {
                        colorPrimary: "#009688",
                        colorText: "#009688",
                        colorTextDisabled: "#FFBF00",
                        colorTextQuaternary: "#FFBF00",
                        fontSize: 20,
                        lineHeight: 6,
                    },
                    Select: {
                        activeBorderColor: "#009688",
                        hoverBorderColor: "#009688",
                    },
                    RangePicker: {
                        activeBorderColor: "#009688",
                        hoverBorderColor: "#009688",
                    },
                },
            }}
        >

            <div className='flex justify-center p-5 h-screen w-full'>

                <div className='w-full border  border-gray-300 rounded-md'>
                    <div className='flex p-3 justify-end' onClick={showModal}
                    >
                        <button className='px-7 py-2 bg-black  text-white rounded-2xl'>Add</button>
                    </div>

                    <Modal
                        title="Add New Field"
                        open={isModalOpen}
                        width={700}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >

                        <div className="p-2 mt-6">
                            <Form
                                {...formItemLayout}
                                form={form}
                                variant={variant || "filled"}
                                initialValues={{ variant: "filled" }}
                            >

                                <Form.Item
                                    name="type"
                                    size="large"
                                    label="Field Type"
                                    rules={[{ required: true, message: "Please select the event type" }]}
                                >
                                    <Select placeholder="Select type" size="large">
                                        <Select.Option value="0">Short answer text</Select.Option>
                                        <Select.Option value="1">Long answer text</Select.Option>
                                        <Select.Option value="2">File Upload</Select.Option>
                                        <Select.Option value="4">Radio Buttons</Select.Option>
                                        <Select.Option value="5">Multi Select</Select.Option>
                                        <Select.Option value="6">True/False Checkbox </Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="description"
                                    label="Question"
                                    rules={[{ required: true, message: "Please describe the event" }]}
                                >
                                    <TextArea
                                        showCount
                                        maxLength={100}
                                        onChange={onChange}
                                        placeholder="About your event"
                                    />
                                </Form.Item>


                            </Form>
                        </div>
                    </Modal>

                </div>

            </div>
        </ConfigProvider>
    )
}

export default UserDynamicForm