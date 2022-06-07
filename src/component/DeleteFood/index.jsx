import { Button, message, Popconfirm } from "antd";
import React, { useContext } from "react";
import { deleteFood } from "../../store/Actions";
import { DataContext } from "../../store/GlobalState";

export default function DeleteFood({ index }) {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;
  const text = "Are you sure to delete this food?";

  const confirm = () => {
    message.info("Xóa thành công");
    handleDeleteFood(index);
  };
  const handleDeleteFood = (index) => {
    dispatch(deleteFood(index, data));
  };
  return (
    <Popconfirm
      placement="right"
      title={text}
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" danger>
        Delete Food
      </Button>
    </Popconfirm>
  );
}
