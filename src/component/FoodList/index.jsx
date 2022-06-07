import { Collapse } from "antd";
import React, { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import FoodListItem from "../FoodListItem";
import DeleteFood from "../DeleteFood";
const { Panel } = Collapse;

function FoodList() {

  const { state } = useContext(DataContext);
  const { data } = state;

  return (
    <Collapse>
      {data.map((item, index) => (
        <Panel header={item.name} key={index}>
          <FoodListItem item={item} />
          <DeleteFood index={index} />
        </Panel>
      ))}
    </Collapse>
  );
}

export default FoodList;