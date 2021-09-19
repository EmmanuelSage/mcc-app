import React from "react";
import "./TabButton.css";

interface IProps {
  id: number;
  toggleState: number;
  toggleTab: (index: number) => void;
}

const TabButton: React.FC<IProps> = ({ children, id, toggleState, toggleTab }) => {
  return (
    <button
      className={toggleState === id ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(id)}
    >
      {children}
    </button>
  );
};

export default TabButton;
