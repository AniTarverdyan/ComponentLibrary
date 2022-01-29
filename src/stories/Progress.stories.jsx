import React from "react";
import Progress from "../lib/Progress/index";

export default {
  title: "Library/Progress",
  component: Progress,
  argTypes: {
    max: { control: "number" },
    value: { control: "number" },
    type: {
      control: "radio",
      options: [
        "info",
        "primary",
        "warning",
        "danger",
        "success",
        "dark",
      ],
    },
    label: { control: "boolean" },
  },
};

const Template = (args) => <Progress {...args} />;

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