import { useState } from "react";

export default function AddTask({ data, setData }) {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value) {
      setInputText(value);
    }
  };

  const handleAdd = () => {
    if (inputText.length) {
      setData((prev) => {
        const newData = { ...prev };
        newData["Todo"] = [...newData["Todo"], inputText];
        return newData;
      });
    }
  };
  return (
    <div className="add-container">
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
