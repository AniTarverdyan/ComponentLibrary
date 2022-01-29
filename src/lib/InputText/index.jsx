import React, { useState } from "react";
import "./InputText.css";

const InputText = ({ type, disabled, placeholder, fontSize, warningText }) => {
  const [inputValue, setInputValue] = useState("");
  const [warnText, setWarnText] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    if (text.length > 18 || text.length < 3) {
      setWarnText(warningText)
    }else{
        setWarnText('')
    }
    setInputValue(text);
  };
  let borderColor;
  switch (type) {
    case "info":
      borderColor = "#08f";
      break;
    case "primary":
      borderColor = "#00f";
      break;
    case "warning":
      borderColor = "#fc0";
      break;
    case "danger":
      borderColor = "#f00";
      break;
    case "success":
      borderColor = "#0f0";
      break;
    case "dark":
      borderColor = "#000";
      break;
    default:
      borderColor = "#000";
  }
  return (
    <div className="inputText">
      <input
        disabled={!!disabled}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        style={{
          fontSize: fontSize,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: borderColor,
        }}
      />
      <div className="warningText">{warnText}</div>
    </div>
  );
};

export default InputText;
