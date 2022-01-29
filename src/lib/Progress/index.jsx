import React, { useEffect, useState } from "react";
import "./Progress.css";

const Progress = ({ max, value, type, label }) => {
  const [progress, setProgress] = useState("");
  useEffect(() => {
    setProgress(100 * (value / max) + "%");
  }, [progress]);
  let progressValueBg;
  let progressBarBd;
  switch (type) {
    case "info":
      progressValueBg = "#08f";
      break;
    case "primary":
      progressValueBg = "#00f";
      break;
    case "warning":
      progressValueBg = "#fc0";
      break;
    case "danger":
      progressValueBg = "#f00";
      break;
    case "success":
      progressValueBg = "#0f0";
      break;
    case "dark":
      progressValueBg = "#000";
      break;
    default:
      progressValueBg = "#000";
  }

  progressBarBd = progressValueBg;
  const handleChange = (e) => {
    setProgress(100 * (e.target.value / max) + "%");
  };
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
      >
        {label && progress}
      </div>
    </div>
  );
};

export default Progress;
