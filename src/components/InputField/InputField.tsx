import React, { ChangeEventHandler } from 'react'
import './InputField.css'

interface IProps {
  label: string;
  type?: string;
  value: string;
  isRequired?: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<IProps> = ({label, type='text', value, handleChange, isRequired = false}) => {
  return (
    <div className='inputfield-container row row-fill flex-center'>
      <div className="col">
      <label> {label} </label>
      <input onChange={handleChange} type={type} value={value} required={isRequired} />
      </div>
    </div>
  )
}

export default InputField
