import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space } from "antd";
import React from "react";
import "./style.scss";

export default function ModalAddFoodForm({
  isModalVisible,
  onFinish,
  onCancel,
  isFilled,
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Thêm món ăn"
      visible={isModalVisible}
      okText="Create"
      cancelText="Cancel"
      width={700}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            // form.resetFields();
            onFinish(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} name="add-food-form" autoComplete="off">
        <Form.Item
          label="Tên món ăn"
          name={["data", "name"]}
          layout="vertical"
          rules={[
            {
              required: true,
              message: "Missing name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <label>Nguyên liệu:</label> <br />
        <Form.List name={["data", "ingredients"]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.name !== curValues.name ||
                      prevValues.mass !== curValues.mass
                    }
                  >
                    {() => (
                      <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing name",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Mass"
                    name={[field.name, "mass"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing mass",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add ingredient
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <span>Cách nấu</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form.List name={["data", "howToCook"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <div key={field.key} className="custorm-space">
                    <Form.Item
                      style={{ width: "100%" }}
                      shouldUpdate={(prevValues, curValues) =>
                        prevValues !== curValues
                      }
                    >
                      {() => (
                        <Form.Item
                          {...field}
                          label={`Step ${index + 1}`}
                          name={field.name}
                          rules={[
                            {
                              required: true,
                              message: "Missing step",
                            },
                          ]}
                        >
                          <Input.TextArea
                            autoSize={{
                              minRows: 3,
                              maxRows: 6,
                            }}
                          />
                        </Form.Item>
                      )}
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </div>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    block
                  >
                    Add step
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        {!isFilled ? <p>you need add ingredient and add step</p> : null}
      </Form>
    </Modal>
  );
}
