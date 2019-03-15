import React from "react";
import spinnerSVG from "./Infinity-7s-131px.svg";
import "./spinner.css";

const Spinner = () => {
  return <img src={spinnerSVG} alt="loading..." className="spinner" />;
};

export default Spinner;
