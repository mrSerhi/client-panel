import React from "react";

const Alert = ({ message, messageType }) => {
  const chooseTypeClass =
    messageType === "success"
      ? "alert alert-success"
      : messageType.includes("error")
      ? "alert alert-danger"
      : "alert";
  return <div className={chooseTypeClass}>{message}</div>;
};

export default Alert;
