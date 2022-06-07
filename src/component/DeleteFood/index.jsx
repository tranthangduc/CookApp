import { Button, message, Popconfirm } from "antd";
import React, { useContext } from "react";
import { deleteFood } from "../../store/Actions";
import { DataContext } from "../../store/GlobalState";

export default function DeleteFood({ index }) {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;
  const text = "削除を確認？";

  const confirm = () => {
    message.info("もう削除しました");
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
      okText="はい"
      cancelText="いいえ"
    >
      <Button type="primary" danger>
        料理を削除
      </Button>
    </Popconfirm>
  );
}
