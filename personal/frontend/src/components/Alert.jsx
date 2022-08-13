import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Alert = () => {
  const { alertType, alertText } = useAuthContext();
  return <div className={alertType}>{alertText}</div>;
};

export default Alert;
