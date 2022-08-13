import React from "react";

const FormRow = ({ type, value, name, handlerChange, labelText }) => {
  return (
    <div className="flex flex-col py-2 ">
      <label className="text-gray-600">{labelText || name}</label>
      <input
        className="form-input"
        type={type}
        value={value}
        name={name}
        onChange={handlerChange}
      />
    </div>
  );
};

export default FormRow;
