import React from "react";
import Checkbox from "../lib/checkbox/checkbox1";

export default {
  title: "Library/Checkbox",
  component: Checkbox,


  argTypes: {
    label: { control: "text" },
    defaultChecked: { control: "boolean" },
    size: {control: "text", options: ["small", "middle", "big"] },
    defaultDisabled: { control: "boolean" },
    color: {control: "text"},
    type: {
      control: "text",
      options: ["shopBasket", "heart", "finger", "bookMark", false],
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
  Primary.args = {
  label: "label",
    defaultChecked: true,
    size: "big",
    defaultDisabled: false,
    color: "aqua",
    type: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "disabled",
  defaultChecked: false,
  size: "middle",
  defaultDisabled: true,
};

export const withIcons = Template.bind({});
withIcons.args = {
  label: "Icon",
  defaultChecked: false,
  size: "big",
  defaultDisabled: true,
  type: "bookMark"
};



