import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const ChildComponent = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="child">
      <h2>Child View</h2>
      <p>The data is: {data}</p>
    </div>
  );
};

export default ChildComponent;
