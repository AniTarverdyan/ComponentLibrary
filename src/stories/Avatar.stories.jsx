import React from "react";
import Avatar from "../lib/avatar/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    image: { control: "text" },
    text: { control: "text" },
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant: { control: "radio", options: ["round", "rounded", "square"] },
    status: {
      control: "radio",
      options: ["active", "inactive", "idle", "none"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  size: "medium",
  text: "M",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "S",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "L",
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: "rounded",
  text: "R",
};

export const Square = Template.bind({});
Square.args = {
  variant: "square",
  text: "S",
};

export const Status = Template.bind({});
Status.args = {
  status: "active",
  text: "A",
};
