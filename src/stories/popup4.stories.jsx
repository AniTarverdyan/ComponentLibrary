import React from "react";
import Popup from "../lib/popup4/Popup4";

export default {
  title: "Library/Popup4",
  component: Popup,
};

function foo(){
  alert("check")
}

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type: "warning",
    headerText:"Are you sure",
    slotText:"You will not be able to recover this imaginary file!",
    button1Text:"No, cancel plx!",
    button1onClick:foo,
    button2Text:'Yes, delete it!',
    button2onClick:foo
};





