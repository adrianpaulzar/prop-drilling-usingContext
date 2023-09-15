import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import ChildComponent from "./ChildComponent"; // Child View

const ParentComponent = () => {
  const { data, updateData } = useContext(AppContext);

  const handleInputChange = (e) => {
    updateData(e.target.value);
  };

  return (
    <div className="parent">
      <h2>Parent View</h2>
      <input
        type="text"
        placeholder="Enter some text"
        value={data}
        onChange={handleInputChange}
        className="input-box"
      />
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
