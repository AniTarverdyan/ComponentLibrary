import React, { useState } from "react";
import './Progress.css';

const Progress = (props) => {
  const { max, value, type } = props;
  const [progress, setProgress] = useState(value)
  const progress = 100 * (value / max) + "%";
  let progressValueBg;
  let progressBarBd;
  switch (type) {
    case "info":
      progressValueBg = "#08f";
      break;
    case "primary":
      progressValueBg = "#00f";
      break
    case "warning":
      progressValueBg = "#fc0";
      break;
    case "danger":
      progressValueBg = "#f00";
      break;
    case "success":
      progressValueBg = "#0f0";
      break;
    case "light":
      progressValueBg = "#fff";
      break;
    case "dark":
      progressValueBg = "#000";
      break;
    default:
      progressValueBg = "#000";
  }

  progressBarBd = progressValueBg;
  const handleChange = (e) => {
    setProgress(e.target.value)
  }
  return (
    <div
      className="progress"
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: progressBarBd,
      }}
    >
      <progress onChange={handleChange} max={max} value={value}></progress>
      <div
        style={{ backgroundColor: progressValueBg, width: progress }}
        className="progressValue"
      ></div>
    </div>
  );
};

export default Progress;
