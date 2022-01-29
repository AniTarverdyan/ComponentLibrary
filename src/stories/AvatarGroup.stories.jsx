import React from "react";
import AvatarGroup from "../lib/avatarGroup/index";
import Avatar from "../lib/avatar/index";

export default {
    title: "Library/AvatarGroup",
    component: AvatarGroup,
    argTypes: {
        max: { control: "number" },
        total: { control: "number" },
    }
};

const Template = (args) => <AvatarGroup {...args} >
    <Avatar text={"A"} /> 
    <Avatar text={"B"} /> 
    <Avatar text={"C"} /> 
    <Avatar text={"D"} /> 
    <Avatar text={"E"} /> 
    <Avatar text={"F"} /> 
    <Avatar text={"G"} /> 
    <Avatar text={"H"} /> 
    <Avatar text={"I"} /> 
    <Avatar text={"J"} /> 
</AvatarGroup>

export const Children = Template.bind({});
Children.args = {
    max: 5,
}
