import React from "react";
import "./avatar.css"

const Avatar = ({ image, text, size, variant, status }) => {
    const style = {};
    const statusStyle = {};

    if (text) {
        style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }


    switch (size) {
        case 'small':
            style.width = '30px';
            style.height = '30px';
            style.fontSize = '18px';
            statusStyle.width = '5px';
            statusStyle.height = '5px';
            statusStyle.bottom = '1px';
            statusStyle.right = '1px';
            break;

        case 'large':
            style.width = '90px';
            style.height = '90px';
            style.fontSize = '45px';
            statusStyle.width = '15px';
            statusStyle.height = '15px';
            statusStyle.bottom = '6px';
            statusStyle.right = '6px';
            break;

        case 'medium':
        default:
            style.width = '70px';
            style.height = '70px';
            style.fontSize = '30px';
            statusStyle.width = '10px';
            statusStyle.height = '10px';
            statusStyle.bottom = '3px';
            statusStyle.right = '3px';
            break;
    }

    switch (variant) {
        case 'square':
            style.borderRadius = 0;
            statusStyle.width = '12px';
            statusStyle.height = '12px';
            statusStyle.bottom = '4px';
            statusStyle.right = '-6px';
            break;
        case 'rounded':
            style.borderRadius = '15%';
            statusStyle.width = '12px';
            statusStyle.height = '12px';
            statusStyle.bottom = '4px';
            statusStyle.right = '-6px';

            break;
        case 'round':
        default:
            style.borderRadius = '50%';
            break;
    }

    switch (status) {
        case 'active':
            statusStyle.backgroundColor = 'green';
            statusStyle.border = '1px solid white';
            break;
        case 'inactive':
            statusStyle.backgroundColor = 'grey';
            statusStyle.border = '1px solid white';
            break;
        case 'idle':
            statusStyle.backgroundColor = 'orange';
            statusStyle.border = '1px solid white';
            break;
        case 'none':
        default:
            statusStyle.backgroundColor = 'none';
            break;


    }

    return <span className="avatar">
        <span className="avatar-content"  style={style}>
            {image && <img src={image} />}
            {!image && text && <span>{text}</span>}
        </span>
        {status && <span className="avatar-status" style={statusStyle}></span>}
    </span>




}

export default Avatar