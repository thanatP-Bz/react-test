import React from "react";

const Alert = ({ error }) => {
  return (
    <div className={`alert alert-${error ? "danger" : "success"}`}>
      {error ? <p>{error}</p> : <p>login success!</p>}
    </div>
  );
};

export default Alert;
