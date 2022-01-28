import React from "react";
import "./button.css"

const Button = ({ label, iconStart, iconEnd, color, size, disabled, onClick }) => {
    let bgColor;
    let fontSize;
    let padding;

    switch (color) {
        case 'success':
            bgColor = 'green';
            break;

        case 'error':
            bgColor = 'red';
            break;

        case 'warning':
            bgColor = 'yellow';
            break;

        case 'info':
            bgColor = 'blue';
            break;


        default:
            bgColor = 'grey';
    }

    switch (size) {
        case 'small':
            fontSize = '12px';
            padding = '4px';
            break;

        case 'large':
            fontSize = '18px';
            padding = '8px';
            break;

        case 'medium':
        default:
            fontSize = '14px';
            padding = '6px';
            break;

    }


    return <button className="button"
        onClick={onClick}
        style={
            { backgroundColor: bgColor, fontSize: fontSize, padding: padding }}
        disabled={disabled} > {
            iconStart && < img src={iconStart}
            />} {
            label && <span> {label} </span>} {
                iconEnd && < img src={iconEnd}
                />}
                </button>
                    }

                export default Button