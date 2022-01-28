import React from "react";
import  Button  from "../lib/button/index";

export default {
    title: "Library/Button",
    component: Button,
    argTypes: {
        label: { control: "text" },
        iconStart: { control: "text" },
        iconEnd: { control: "text" },
        color: { control: "radio", options: ["success", "warning", "info", "error"]},
        size: { control: "radio", options: ["small", "medium", "large"]},
        disabled: { control: "boolean" },    
    },
};

const Template = (args) => <Button {...args} />

export const Medium = Template.bind({});
Medium.args = {
    size: "medium", 
    label: "Button", 
}

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",   
}

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",  
}

export const Success = Template.bind({});
Success.args = {
    color: "success",
    label: "Button",   
}

export const Warning = Template.bind({});
Warning.args = {
    color: "warning",
    label: "Button",   
}

export const Error = Template.bind({});
Error.args = {
    color: "error", 
    label: "Button",  
}

export const Info = Template.bind({});
Info.args = {
    color: "info", 
    label: "Button",  
}
