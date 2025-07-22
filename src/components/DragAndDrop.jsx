import { useRef, useState } from "react";
import AddTask from "./AddTask";

export default function DragAndDrop({ initialData }) {
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, containerKey) => {
    dragItem.current = item;
    dragContainer.current = containerKey;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;

    if (sourceContainer === targetContainer) return; // Optional: avoid dropping in same place

    setData((prev) => {
      const newData = { ...prev };
      // Remove from source
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      // Add to target
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="app-container">
      <AddTask data={data} setData={setData} />

      <div className="container">
        {Object.entries(data).map(([key, items]) => (
          <div
            key={key}
            onDrop={(e) => handleDrop(e, key)}
            onDragOver={handleDragOver}
            className="lists-container"
          >
            <label>
              <strong>{key}</strong>
            </label>
            <div className="items-container">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, key)}
                  onDragEnd={handleDragEnd}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
