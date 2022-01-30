import React from "react";
import Popup from "../../lib/popup2/popup2";

export default {
  title: "Library/Popup2",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type: "subscribe",
    headerText: "Enter your email below to get 10% OFF your first order!",
    inputPlaceholder: "Write email",
    buttonText:"Subscribe",
    linkText:"No thanks. I will pay full price",
};





