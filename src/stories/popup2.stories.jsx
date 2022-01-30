import React from "react";
import Popup from "../lib/popup2/popup2";

export default {
  title: "Library/Popup2",
  component: Popup,
};

function foo(){
  alert("check")
}

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type:"subsfffcribe",
    headerText:"Enter your email below to get 10% OFF your first order!",
    inputPlaceholder:"Write email",
    inputValue:"",
    inputonChange:"",
    buttonText:"Subscribe",
    buttononClick: foo,
    linkText:"No thanks. I will pay full price",
    linkHref:"",
    messageText:""
};





