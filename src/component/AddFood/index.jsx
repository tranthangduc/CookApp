import { Button } from "antd";
import React, { useContext, useState } from "react";
import "./addfood.scss";
import { addFood } from "../../store/Actions";
import { DataContext } from "../../store/GlobalState";
import ModalAddFoodForm from "../ModalAddFoodForm";

export default function AddFood() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

  const { state, dispatch } = useContext(DataContext);
  const { data } = state;

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
    if (
      values.data.ingredients === undefined ||
      values.data.howToCook === undefined ||
      values.data.ingredients.length === 0 ||
      values.data.howToCook.length === 0
    ) {
      setIsFilled(false);
    } else {
      dispatch(addFood(values.data, data));
      setIsModalVisible(false);
    }
  };

  return (
    <div className="add-food-section">
      <Button
        className="btn btn-add-food"
        type="primary"
        onClick={() => setIsModalVisible(true)}
      >
        Thêm món ăn
      </Button>
      {isModalVisible ? (
        <ModalAddFoodForm
          isModalVisible={isModalVisible}
          onFinish={onFinish}
          onCancel={() => setIsModalVisible(false)}
          isFilled={isFilled}
        />
      ) : null}
    </div>
  );
}
