import React from "react";
import InputText from "../lib/InputText/index";

export default {
  title: "Library/InputText",
  component: InputText,
  argTypes: {
    type: {
      control: "radio",
      options: ["info", "primary", "warning", "danger", "success", "dark"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    fontSize: { control: "number" },
    warningText: { control: "text" },
  },
};

const Template = (args) => <InputText {...args} />;

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  type: "info",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Dark = Template.bind({});
Dark.args = {
  type: "dark",
};
