import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Image, Input, Space, Upload } from "antd";
import React, { useState } from "react";
import Axios from "../../axios/Axios";
import { Regex } from "../../utils/Constants";
const { RangePicker } = DatePicker;

export const Links = ({ formData, setFormData, current, setCurrent }) => {
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    const [fileList, setFileList] = useState([]);

    const onFinish = (value) => {
        console.log(value);
        setFormData({ ...formData, links: value });
        setCurrent(current + 1);
    };
    return (
        <div className="md:mx-20">
            <Form
                name="form"
                layout="vertical"
                onFinish={onFinish}
                initialValues={formData.links}
            >
                <Form.Item
                    name="linkedin"
                    label="LINKEDIN"
                    rules={[
                        {
                            pattern: Regex.urlRegex,
                            message: "Please enter a valid url",
                        },
                    ]}
                >
                    <Input placeholder="eg. https://linkedin.com" />
                </Form.Item>

                <Form.Item
                    name="instagram"
                    label="INSTAGRAM"
                    rules={[
                        {
                            pattern: Regex.urlRegex,
                            message: "Please enter a valid url",
                        },
                    ]}
                >
                    <Input placeholder="eg. https://instagram.com" />
                </Form.Item>

                <Form.Item
                    name="discord"
                    label="DISCORD"
                    rules={[
                        {
                            pattern: Regex.urlRegex,
                            message: "Please enter a valid url",
                        },
                    ]}
                >
                    <Input placeholder="eg. https://discord.com" />
                </Form.Item>

                <Form.Item label="SPONSOR IMAGES" name="sponsors">
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        accept="image/*"
                        beforeUpload={() => {
                            return false;
                        }}
                    >
                        {fileList.length >= 10 ? null : uploadButton}
                    </Upload>
                </Form.Item>
                {previewImage && (
                    <Image
                        wrapperStyle={{
                            display: "none",
                        }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(""),
                        }}
                        src={previewImage}
                    />
                )}
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

export const Dates = ({ formData, setFormData, current, setCurrent }) => {
    const rangeConfig = {
        rules: [
            {
                type: "array",
                required: true,
                message: "Please select time!",
            },
        ],
    };
    const onFinish = (fieldsValue) => {
        setFormData({ ...formData, dateAndPrices: fieldsValue });
        console.log("finaldata: ", formData);
        const { description, name, type } = formData.basic;

        const finalData = {
            start_date_of_event: formData.eventDate[0],
            registration_start_date: formData.registrationDate[0],
            end_date_of_event: formData.eventDate[1],
            registration_end_date: formData.registrationDate[1],
            description,
            ...formData?.eventDetails,
            event_name: name,
            event_type: type,
            links: formData?.links,
            linkedin_url: formData?.links?.linkedins,
            instagram_url: formData?.links?.instagram,
            discord_url: formData?.links?.discord,
            sponsors: formData?.links?.sponsors?.fileList,
            banner_image: formData.basic.banner.file,
            prizes: formData?.dateAndPrices?.prizes,
        }
        const req = {
            apiName: "create_event/",
            method: "post",
            dataObject: finalData,
            contentType: "multipart/form-data"
        }
        Axios(req)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(finalData);
    };

    return (
        <div className="md:mx-20 flex justify-center">
            <Form
                name="dateAndPrices"
                layout="vertical"
                onFinish={onFinish}
                initialValues={formData.dateAndPrices}
            >
                <Form.Item
                    name="registrationDate"
                    label="REGISTRATION DATES"
                    {...rangeConfig}
                >
                    <RangePicker
                        style={{ width: "100%" }}
                        size="large"
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        onChange={(_, value) =>
                            setFormData({ ...formData, registrationDate: value })
                        }
                    />
                </Form.Item>
                <Form.Item name="eventDate" label="EVENT DATES" {...rangeConfig}>
                    <RangePicker
                        style={{ width: "100%" }}
                        size="large"
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        onChange={(_, value) =>
                            setFormData({ ...formData, eventDate: value })
                        }
                    />
                </Form.Item>

                <div className="mt-12">
                    <Form.List name="prizes">
                        {(fields, { add, remove }) => (
                            <>
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
                                            <Input placeholder="Name" />
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
                                            <Input placeholder="Prizes" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                            </>
                        )}
                    </Form.List>
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
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};
