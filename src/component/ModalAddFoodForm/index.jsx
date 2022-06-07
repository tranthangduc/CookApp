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
          label="食べ物の名前"
          name={["data", "name"]}
          layout="vertical"
          rules={[
            {
              required: true,
              message: "名前がありません",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <label>材料:</label> <br />
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
                        label="名前"
                        name={[field.name, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "名前がありません",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    )}
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="質量"
                    name={[field.name, "mass"]}
                    rules={[
                      {
                        required: true,
                        message: "質量がありません",
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
                  材料を追加
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <span>料理の使い方</span>
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
                              message: "行方不明のステップ",
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
                    ステップを追加
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        {!isFilled ? (
          <p>材料を追加してステップを追加する必要があります</p>
        ) : null}
      </Form>
    </Modal>
  );
}
