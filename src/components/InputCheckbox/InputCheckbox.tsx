import React, { ChangeEventHandler } from "react";
interface IProps {
  isChecked: boolean;
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
const InputCheckbox: React.FC<IProps> = ({isChecked, handleChange, label}) => {
  return (
    <label className="paper-check">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span> {label} </span>
    </label>
  );
}

export default InputCheckbox;
