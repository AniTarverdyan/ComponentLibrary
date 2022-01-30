import React from "react";
import Popup from "../lib/popup1/popup1";

export default {
  title: "Library/Popup1",
  component: Popup,
};

function foo(){
  alert("check")
}

const Template = (args) => <Popup {...args} />;

export const example1 = Template.bind({});
  example1.args = {
    type:"login",
    headerText:"Գրանցում",
    label1Text:"անուն/ազգանուն",
    input1Placeholder:"Գրեք Ձեր անունը/ազգանունը",
    input1Value:"",
    input1onChange:"",
    label2Text:"էլեկտրոնային հասցե",
    input2Placeholder:"Գրեք Ձեր էլեկտրոնային հասցեն",
    input2Value:"",
    input2onChange:"",
    label3Text:"գաղտնաբառ",
    input3Placeholder:"*******",
    input3Value:"",
    input3onChange:"",
    buttonText:"Հաստատել",
    buttononClick:foo,
    message1Text:"",
    message2Text:"",
    message3Text:""
};





