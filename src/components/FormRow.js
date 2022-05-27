import React from "react";
import { useAppContext } from "../context/appContext";

const FormRow = () => {
  const { alertText } = useAppContext();
  return <div>{alertText}</div>;
};

export default FormRow;
