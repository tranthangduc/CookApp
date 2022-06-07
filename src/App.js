import React from "react";
import "./app.scss";
import AddFood from "./component/AddFood";
import FoodList from "./component/FoodList";
//import Test from "./Test";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>クック　アプリケーション</h1>
        <AddFood />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
